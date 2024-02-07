# your_theme_package.py
from os import path

def setup(app):
    app.add_html_theme('sphinx_quantinuum', path.abspath(path.dirname(__file__)))
