import secrets
import string

from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.table.models import PasswordRecord
from app.schemas import PasswordGenerateRequest, PasswordGenerateResponse


router = APIRouter(prefix="/passwords", tags=["passwords"])


def generate_password(options: PasswordGenerateRequest) -> str:
    """Generate a password with one character from each enabled category."""
    character_sets = []
    if options.lowercase:
        character_sets.append(string.ascii_lowercase)
    if options.uppercase:
        character_sets.append(string.ascii_uppercase)
    if options.numbers:
        character_sets.append(string.digits)
    if options.symbols:
        character_sets.append(string.punctuation)

    # Add one character from each category first to satisfy the selected options.
    password_characters = [secrets.choice(character_set) for character_set in character_sets]
    pool = "".join(character_sets)

    # Choose the remaining characters from the combined enabled character set.
    password_characters.extend(
        secrets.choice(pool) for _ in range(options.length - len(password_characters))
    )

    # Shuffle the characters so categories do not occupy fixed positions.
    secrets.SystemRandom().shuffle(password_characters)
    return "".join(password_characters)


@router.post("/generate", response_model=PasswordGenerateResponse, status_code=201)
def create_password(
    options: PasswordGenerateRequest,
    response: Response,
    db: Session = Depends(get_db),
):
    """Generate the password and persist its options, never the secret itself."""

    # Prevent the password in the response from being stored by HTTP caches.
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, private"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"

    password = generate_password(options)

    # The record contains metadata for statistics or auditing, not the password.
    record = PasswordRecord(
        length=options.length,
        symbols=options.symbols,
        numbers=options.numbers,
        uppercase=options.uppercase,
        lowercase=options.lowercase,
        status="CREATED_OK",
    )

    try:
        # If PostgreSQL fails, roll back the transaction and inform the client.
        db.add(record)
        db.commit()
        db.refresh(record)
    except SQLAlchemyError as error:
        db.rollback()
        raise HTTPException(status_code=503, detail="Unable to save password generation") from error

    return PasswordGenerateResponse(
        record_id=record.id,
        password=password,
        created_at=record.created_at,
        length=record.length,
        symbols=record.symbols,
        numbers=record.numbers,
        uppercase=record.uppercase,
        lowercase=record.lowercase,
        status=record.status,
    )