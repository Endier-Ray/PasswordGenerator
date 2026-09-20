from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.db.database import get_db, engine, Base
from app.db.table import models
from app.routes.passwords import router as passwords_router

# Create the tables declared in the models if they do not exist yet.
Base.metadata.create_all(bind=engine)

# Main API configuration and OpenAPI documentation settings.
app = FastAPI(
    title="Password Generator API",
    description="API for generating secure passwords",
    version="1.0.0",
)

# Allow the local frontend to consume the API from the browser.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4321"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the endpoints related to password generation.
app.include_router(passwords_router)

@app.get("/")
def read_root():
    """Confirm that the API is available."""
    return {"message": "Welcome to the Password Generator API"}


@app.get("/health")
def health_check(db: Session = Depends(get_db)):
    """Check that the backend can execute a query against PostgreSQL."""
    try:
        db.execute(text("SELECT 1"))
        return {
            "status": "healthy",
            "database": "connected"
        }
    except Exception as e:
        raise HTTPException(
            status_code=503,
            detail={
                "status": "unhealthy",
                "database": "disconnected",
                "error": str(e),
            },
        ) from e
