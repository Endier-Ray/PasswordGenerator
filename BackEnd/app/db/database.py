import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Docker uses the service name "db"; locally, this variable can be overridden
# to point to another PostgreSQL instance.
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres_password@localhost:5432/password_db")

# pool_pre_ping checks that a reused connection is still active before using it.
engine = create_engine(DATABASE_URL, pool_pre_ping=True)

# The session does not commit automatically: each operation decides when to commit
# or roll back its changes.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    """Provide one session per request and close it when the request finishes."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()