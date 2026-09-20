from sqlalchemy import Boolean, Column, DateTime, Integer, String
from datetime import datetime, timezone
from app.db.database import Base

# Configuration record for a generated password.
# The password itself is never stored in this model.
class PasswordRecord(Base):
    __tablename__ = "passwords"

    # Internal record identifier.
    id = Column(Integer, primary_key=True, index=True)
    # Store the timezone to preserve the actual creation time.
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)

    # Options used to build the password.
    length = Column(Integer, nullable=False)
    symbols = Column(Boolean, nullable=False)
    numbers = Column(Boolean, nullable=False)
    uppercase = Column(Boolean, nullable=False)
    lowercase = Column(Boolean, nullable=False)

    # Generation and persistence operation status.
    status = Column(String(20), nullable=False, default="CREATED_OK")