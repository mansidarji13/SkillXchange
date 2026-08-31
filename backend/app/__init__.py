from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from .config import Config


db = SQLAlchemy()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)

    CORS(app)

    from .routes.profile_routes import profile_bp
    app.register_blueprint(profile_bp, url_prefix="/api/profile")

    from .routes.auth_routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")

    @app.route("/")
    def home():
        return {
            "message": "SkillXchange backend is running",
            "status": "success"
        }

    @app.route("/api/db-test")
    def db_test():
        try:
            with db.engine.connect() as connection:
                connection.exec_driver_sql("SELECT 1")

            return {
                "message": "MySQL database connection is working",
                "status": "success"
            }

        except Exception as e:
            return {
                "message": "MySQL database connection failed",
                "status": "error",
                "error": str(e)
            }, 500

    return app