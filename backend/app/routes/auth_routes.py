from flask import Blueprint, request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

from .. import db
from ..models import User, Profile


auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/register/", methods=["POST"])
def register():
    data = request.get_json()

    if not data:
        return {
            "status": "error",
            "message": "Request body is required"
        }, 400

    full_name = data.get("full_name")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    # Required fields
    if not full_name:
        return {
            "status": "error",
            "message": "Full name is required"
        }, 400

    if not email:
        return {
            "status": "error",
            "message": "Email is required"
        }, 400

    if not password:
        return {
            "status": "error",
            "message": "Password is required"
        }, 400

    if not confirm_password:
        return {
            "status": "error",
            "message": "Confirm password is required"
        }, 400

    # Password confirmation
    if password != confirm_password:
        return {
            "status": "error",
            "message": "Passwords do not match"
        }, 400

    # Check existing email
    existing_user = User.query.filter_by(
        email=email
    ).first()

    if existing_user:
        return {
            "status": "error",
            "message": "An account with this email already exists"
        }, 409

    # Create user
    user = User(
        full_name=full_name,
        email=email,
        password_hash=generate_password_hash(password),
        role="Learner"
    )

    db.session.add(user)

    # Generate user.id before creating the profile
    db.session.flush()

    # Create profile for the new user
    profile = Profile(
        user_id=user.id,
        full_name=user.full_name,
        email=user.email,
        role=user.role
    )

    db.session.add(profile)
    db.session.commit()

    return {
        "status": "success",
        "message": "Account created successfully",
        "user": user.to_dict(),
        "profile": profile.to_dict()
    }, 201


@auth_bp.route("/login/", methods=["POST"])
def login():
    data = request.get_json()

    if not data:
        return {
            "status": "error",
            "message": "Request body is required"
        }, 400

    email = data.get("email")
    password = data.get("password")

    if not email:
        return {
            "status": "error",
            "message": "Email is required"
        }, 400

    if not password:
        return {
            "status": "error",
            "message": "Password is required"
        }, 400

    user = User.query.filter_by(
        email=email
    ).first()

    if not user:
        return {
            "status": "error",
            "message": "Invalid email or password"
        }, 401

    if not check_password_hash(
        user.password_hash,
        password
    ):
        return {
            "status": "error",
            "message": "Invalid email or password"
        }, 401

    access_token = create_access_token(
        identity=str(user.id)
    )

    return {
        "status": "success",
        "message": "Login successful",
        "access_token": access_token,
        "user": user.to_dict()
    }, 200