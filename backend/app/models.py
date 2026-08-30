from datetime import datetime, timezone

from . import db


class Profile(db.Model):
    __tablename__ = "profiles"

    id = db.Column(db.Integer, primary_key=True)

    # Basic profile information
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    role = db.Column(db.String(50), default="Learner")

    bio = db.Column(db.Text, nullable=True)
    location = db.Column(db.String(100), nullable=True)

    # Skills
    skills_to_learn = db.Column(db.Text, nullable=True)
    skills_to_teach = db.Column(db.Text, nullable=True)

    # Profile image
    profile_image = db.Column(db.String(255), nullable=True)

    # Timestamps
    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc)
    )

    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc)
    )

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "role": self.role,
            "bio": self.bio,
            "location": self.location,
            "skills_to_learn": self.skills_to_learn,
            "skills_to_teach": self.skills_to_teach,
            "profile_image": self.profile_image,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }