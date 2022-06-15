from email import message
from sre_constants import SUCCESS
from flask import Flask, render_template, request, flash
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, URL
from flask_ckeditor import CKEditorField
from flask_mail import Message, Mail
from config import mail_username, mail_password

mail = Mail()

app = Flask(__name__)
Bootstrap(app)

app.secret_key = 'development54y933431'

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False
app.config["MAIL_USERNAME"] = mail_username
app.config["MAIL_PASSWORD"] = mail_password

mail.init_app(app)

@app.route('/')
def home():
    return render_template('index.html')


@app.route("/contact", methods=['GET', 'POST'])
def contact():

    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        message = request.form.get('message')

        msg = Message(subject=f"Mail from {name}", 
        body=f"Name: {name}\nE-Mail: {email}\nPhone: {phone}\n\n\n{message}",
        sender=mail_username,
        recipients=['syedusama70@gmail.com'])
        mail.send(msg)
        return render_template("contact.html", success=True)

    elif request.method == 'GET':
        return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)