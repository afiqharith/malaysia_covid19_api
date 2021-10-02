from flask import Flask

class MOH_RESTAPI:
    def __init__(self) -> None:
        self.run_app = self.init()

    def init(self) -> Flask:
        app = Flask(__name__)
        app.config["SECRET_KEY"] = "MYAPI123"

        from .api import api
        app.register_blueprint(api, url_prefix="/")

        return app