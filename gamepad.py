# from flask import Flask, render_template, url_for
from flask import *

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('gamepad_home.html', title='О')


@app.route('/game')
def game():
    return render_template('game.html', title='Game')



@app.route('/gamepad')
def gamepad():
    return render_template('gamepad.html', title='Gamepad')


@app.route('/register.php')
def register():
    return render_template('register.php', title='Registered')


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)


