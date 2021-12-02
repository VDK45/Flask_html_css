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


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)

# with app.test_request_context():
#     print(url_for('home'))
#     print(url_for('game'))
#     print(url_for('about'))
#     print(url_for('index', username='user', pin=45))
