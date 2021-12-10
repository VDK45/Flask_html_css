# from flask import Flask, render_template, url_for, request
from flask import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'wtf.omg,ggg-vdk45'


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


@app.route('/frame')
def frame():
    return render_template('frame.html', title='frame')


@app.route('/register', methods=["POST", "GET"])
def register():

    if request.method == "POST":
        if len(request.form['fio']) > 4 and len(request.form['pass']) > 4 and request.form['agree'] == 'on':   #  Если нет agree будет ошибка
            flash('Сообщение отправлено', category='success')
        else:
            flash('Ошибка отправки', category='error')
        if request.form['fio'] == 'VDK45':
            print("Hello VDK45")
        print(request.form)
        # print(type(request.form['agree']))

    return render_template('gamepad_home.html', title='Registered')


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)


