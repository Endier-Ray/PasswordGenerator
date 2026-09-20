from datetime import datetime

from pydantic import BaseModel, Field, model_validator


class PasswordGenerateRequest(BaseModel):
    """Options received to generate a password."""

    length: int = Field(default=16, ge=1, le=128)
    symbols: bool = True
    numbers: bool = True
    uppercase: bool = True
    lowercase: bool = True

    @model_validator(mode="after")
    def validate_options(self):
        """Prevent empty passwords or impossible character category combinations."""
        enabled_options = sum((self.symbols, self.numbers, self.uppercase, self.lowercase))
        if enabled_options == 0:
            raise ValueError("At least one character type must be enabled")
        if enabled_options > self.length:
            raise ValueError("Length must cover every enabled character type")
        return self


class PasswordGenerateResponse(BaseModel):
    """Data returned after generating and recording a password."""

    record_id: int
    password: str
    created_at: datetime
    length: int
    symbols: bool
    numbers: bool
    uppercase: bool
    lowercase: bool
    status: str