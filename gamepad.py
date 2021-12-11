# from flask import Flask, render_template, url_for, request, flask, session, redirect
import socket
from flask import *
from time import sleep

app = Flask(__name__)
app.config['SECRET_KEY'] = 'wtf.omg,ggg-vdk45'

ip = 'vdk45.ddns.net'


def client_send(mes):
    global ip
    mes = mes.encode('utf-8')
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        sock.connect((ip, 4545))
        sock.send(mes)  # send byte
    except (TimeoutError, OSError) as err:
        print("Не удалось установить соединение.")
        print("Проверьте IP адрес!")
        sock.close()
        ip_server()
    sock.close()


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


# Страница не найдена
@app.errorhandler(404)
def pageNotFound(error):
    return render_template('page404.html', title="Страница не найдена"), 404


#  Профиль пользователя
@app.route("/profile/<username>")
def profile(username):
    if 'userLongged' not in session or session['userLongged'] != username:  # Проверка сессии
        abort(401)
    return f"Профиль пользователя: {username}"


#  Авторизация
@app.route("/login", methods=["POST", "GET"])
def login():
    if "userLongged" in session:
        return redirect(url_for('profile', username=session['userLongged']))
    elif request.method == 'POST' and request.form['username'] == 'VDK45' and request.form['pass'] == '45':
        session['userLongged'] = request.form['username']
        return redirect(url_for('profile', username=session['userLongged']))
    return render_template('login.html', title='Авторизация')


@app.route('/controller', methods=["POST", "GET"])
def controller():

    if request.method == "POST":
        if request.form['space'] == 'space':
            client_send('!jump')
            flash('Отправлено jump', category='success')
        elif request.form['shoot'] == 'shoot':
            client_send('!shoot')
            flash('Отправлено shoot', category='success')
        elif request.form['pause'] == 'pause':
            client_send('!pause')
            flash('Отправлено pause', category='success')
        elif request.form['up'] == 'up':
            client_send('!up')
            flash('Отправлено up', category='success')
            sleep(0.3)
            client_send('#up')
        elif request.form['down'] == 'down':
            client_send('!down')
            flash('Отправлено down', category='success')
            sleep(0.3)
            client_send('#down')
        elif request.form['left'] == 'left':
            client_send('!left')
            flash('Отправлено left', category='success')
            sleep(0.3)
            client_send('#left')
        elif request.form['right'] == 'right':
            client_send('!right')
            flash('Отправлено right', category='success')
            sleep(0.3)
            client_send('#right')
        else:
            flash('Ошибка отправки или игра не запушена', category='error')

        print(request.form)
        # print(type(request.form['agree']))

    return render_template('controller.html', title='Controller')


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)


