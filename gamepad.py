# from flask import Flask, render_template, url_for, request, flask, session, redirect
import socket
from flask import *
from time import sleep
import pyautogui as key

app = Flask(__name__)
app.config['SECRET_KEY'] = 'wtf.omg,ggg-vdk45.58jgtd32gg<kl>'

ip = 'vdk45.ddns.net'  # send to game


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
        try:
            ip_server()
        except NameError as err:
            print("Не удалось установить соединение.")
            print("Игра не запушена.")
    sock.close()


@app.route('/stream_off')
def pageOffline():
    return render_template('stream_offline.html', title="Stream offline")


@app.route('/')
@app.route('/home')
def home():
    return render_template('gamepad_home.html', title='О')


@app.route('/game')
def game():
    return render_template('game.html', title='Game')





@app.route('/frame')
def frame():
    return render_template('frame.html', title='frame')


@app.route('/register', methods=["POST", "GET"])
def register():
    if request.method == "POST":
        print(request.form)  # delete

        if len(request.form['fio']) < 4:
            flash('Ваш ник слишком короткий', category='error')
            return redirect(url_for('register'))
        elif len(request.form['pass']) < 4:
            flash('Ваш пароль слишком легкий', category='error')
            return redirect(url_for('register'))
        elif len(request.form) == 6:
            flash('Вы принимаете пользовательское соглашение?', category='error')
            return redirect(url_for('register'))
        else:
            flash('Регистрация прошла успешно', category='success')
            return redirect(url_for('register'))
    else:
        return render_template('gamepad_home.html', title='Registered')
    # return render_template('gamepad_home.html', title='Registered')


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


#  Авторизация ----------------
@app.route("/login", methods=["POST", "GET"])
def login():
    if "userLongged" in session:
        return redirect(url_for('profile', username=session['userLongged']))
    elif request.method == 'POST' and request.form['username'] == 'VDK45' and request.form['pass'] == '45':
        session['userLongged'] = request.form['username']
        return redirect(url_for('profile', username=session['userLongged']))
    return render_template('login.html', title='Авторизация')


@app.route('/gamepad', methods=["POST", "GET"])
def gamepad():

    if request.method == "POST":
        if request.form['b_space'] == '':
            client_send('!jump')
            sleep(0.3)
            client_send('#jump')
        if request.form['b_shoot'] == '':
            client_send('!shoot')
            sleep(0.3)
            client_send('#shoot')
        if request.form['b_pause'] == '':
            client_send('!pause')
            sleep(0.3)
            client_send('#pause')
        if request.form['b_up'] == '':
            client_send('!up')
            sleep(0.3)
            client_send('#up')
        if request.form['b_down'] == '':
            client_send('!down')
            sleep(0.3)
            client_send('#down')
        if request.form['b_left'] == '':
            client_send('!left')
            sleep(0.3)
            client_send('#left')
        if request.form['b_right'] == '':
            client_send('!right')
            sleep(0.3)
            client_send('#right')
        else:
            flash('Ошибка отправки gamepad 1!', category='error')
            flash('Возможно стрим закончился или игра не запушена', category='error')
            return redirect(url_for('gamepad'))
            # return render_template('stream_offline.html', title='Stream offline')
    return render_template('gamepad.html', title='Gamepad 1')

@app.route('/controller', methods=["POST", "GET"])
def controller():
    return render_template('controller.html', title='Gamepad mini')


@app.route('/controller_2', methods=["POST", "GET"])
def controller_2():
    if request.method == "POST":
        if request.form['b_space2'] == '':
            client_send('!!jump')
            sleep(0.3)
            client_send('##jump')
        if request.form['b_shoot2'] == '':
            client_send('!!shoot')
            sleep(0.3)
            client_send('##shoot')
        if request.form['b_pause2'] == '':
            client_send('!!pause')
            sleep(0.3)
            client_send('##pause')
        if request.form['b_up2'] == '':
            client_send('!!up')
            sleep(0.3)
            client_send('##up')
        if request.form['b_down2'] == '':
            client_send('!!down')
            sleep(0.3)
            client_send('##down')
        if request.form['b_left2'] == '':
            client_send('!!left')
            sleep(0.3)
            client_send('##left')
        if request.form['b_right2'] == '':
            client_send('!!right')
            sleep(0.3)
            client_send('##right')
        else:
            flash('Ошибка отправки из gamepad 2!', category='error')
            flash('Возможно стрим закончился или игра не запушена', category='error')
            return redirect(url_for('controller_2'))
            # return render_template('stream_offline.html', title='Stream offline')
    return render_template('controller_2.html', title='Minipad 2')

@app.route('/gamepad_2', methods=["POST", "GET"])
def gamepad_2():
    return render_template('gamepad_2.html', title='Gamepad 2')


@app.route('/pc_gamepad', methods=["POST", "GET"])
def pc_gamepad():

    if request.method == "POST":
        print(request.form)
        if request.form['b_space0'] == '':
            key.keyDown('space')
            sleep(0.5)
            key.keyUp('space')
        if request.form['b_shoot0'] == '':
            key.keyDown('e')
            sleep(0.5)
            key.keyUp('e')
        if request.form['b_pause0'] == '':
            key.press('g')
            key.press('g')
        if request.form['b_up0'] == '':
            key.keyDown('w')
            sleep(0.5)
            key.keyUp('w')
        if request.form['b_down0'] == '':
            key.keyDown('s')
            sleep(0.5)
            key.keyUp('s')
        if request.form['b_left0'] == '':
            key.keyDown('a')
            sleep(0.5)
            key.keyUp('a')
        if request.form['b_right0'] == '':
            key.keyDown('d')
            sleep(0.5)
            key.keyUp('d')
        else:
            flash('Ошибка отправки pc_gamepad!', category='error')
            flash('Возможно стрим закончился или игра не запушена', category='error')
            return redirect(url_for('pc_gamepad'))
            # return render_template('stream_offline.html', title='Stream offline')
    return render_template('pc_gamepad.html', title='PC_Gamepad')


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)
