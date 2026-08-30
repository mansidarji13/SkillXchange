from flask import Blueprint, request

from .. import db
from ..models import Profile


profile_bp = Blueprint("profile", __name__)


# GET ALL PROFILES
@profile_bp.route("/", methods=["GET"])
def get_profiles():
    profiles = Profile.query.all()

    return {
        "status": "success",
        "profiles": [profile.to_dict() for profile in profiles]
    }


# GET ONE PROFILE
@profile_bp.route("/<int:profile_id>", methods=["GET"])
def get_profile(profile_id):
    profile = Profile.query.get(profile_id)

    if not profile:
        return {
            "status": "error",
            "message": "Profile not found"
        }, 404

    return {
        "status": "success",
        "profile": profile.to_dict()
    }


# CREATE PROFILE
@profile_bp.route("/", methods=["POST"])
def create_profile():
    data = request.get_json()

    if not data:
        return {
            "status": "error",
            "message": "Request body is required"
        }, 400

    required_fields = ["full_name", "email"]

    for field in required_fields:
        if not data.get(field):
            return {
                "status": "error",
                "message": f"{field} is required"
            }, 400

    existing_profile = Profile.query.filter_by(
        email=data["email"]
    ).first()

    if existing_profile:
        return {
            "status": "error",
            "message": "A profile with this email already exists"
        }, 409

    profile = Profile(
        full_name=data["full_name"],
        email=data["email"],
        role=data.get("role", "Learner"),
        bio=data.get("bio"),
        location=data.get("location"),
        skills_to_learn=data.get("skills_to_learn"),
        skills_to_teach=data.get("skills_to_teach"),
        profile_image=data.get("profile_image"),
    )

    db.session.add(profile)
    db.session.commit()

    return {
        "status": "success",
        "message": "Profile created successfully",
        "profile": profile.to_dict()
    }, 201


# UPDATE PROFILE
@profile_bp.route("/<int:profile_id>", methods=["PUT"])
def update_profile(profile_id):
    profile = Profile.query.get(profile_id)

    if not profile:
        return {
            "status": "error",
            "message": "Profile not found"
        }, 404

    data = request.get_json()

    if not data:
        return {
            "status": "error",
            "message": "Request body is required"
        }, 400

    if "email" in data:
        existing_profile = Profile.query.filter(
            Profile.email == data["email"],
            Profile.id != profile_id
        ).first()

        if existing_profile:
            return {
                "status": "error",
                "message": "A profile with this email already exists"
            }, 409

    if "full_name" in data:
        profile.full_name = data["full_name"]

    if "email" in data:
        profile.email = data["email"]

    if "role" in data:
        profile.role = data["role"]

    if "bio" in data:
        profile.bio = data["bio"]

    if "location" in data:
        profile.location = data["location"]

    if "skills_to_learn" in data:
        profile.skills_to_learn = data["skills_to_learn"]

    if "skills_to_teach" in data:
        profile.skills_to_teach = data["skills_to_teach"]

    if "profile_image" in data:
        profile.profile_image = data["profile_image"]

    db.session.commit()

    return {
        "status": "success",
        "message": "Profile updated successfully",
        "profile": profile.to_dict()
    }


# DELETE PROFILE
@profile_bp.route("/<int:profile_id>", methods=["DELETE"])
def delete_profile(profile_id):
    profile = Profile.query.get(profile_id)

    if not profile:
        return {
            "status": "error",
            "message": "Profile not found"
        }, 404

    db.session.delete(profile)
    db.session.commit()

    return {
        "status": "success",
        "message": "Profile deleted successfully"
    }