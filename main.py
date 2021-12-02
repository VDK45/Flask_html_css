# from flask import Flask, render_template, url_for
from flask import *

app = Flask(__name__)

menu = ['Мой TWITCH канал', 'Gamepad.exe Для Windows 10', 'Обратная связь']
groups = ['45', 'vdk45', 'flask', 'vdk']


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', title='Flask', menu=menu)


@app.route('/game')
def game():
    return render_template('game.html', title='Game', menu=menu)


# @app.route('/index')
# def title():
#     return render_template('index.html', title='Index', menu=menu)


@app.route('/about')
def about():
    return render_template('about.html', title='About', menu=menu)


@app.route('/about_no_title')
def about_no_title():
    return render_template('about_2.html', menu=menu)


@app.route('/use/<name>/<birthday>')
def use_n_p(name, birthday):
    return f'Hello {name} {str(birthday)} old'


@app.route('/group/<path:name>')
def group_n(name):  # <name> передавать параметры в шаблон файл group.html
    if name in groups:
        return render_template('group.html', title='Группа', name=name, menu=menu)
    else:
        return render_template('group.html', title='Группа', menu=menu)


@app.route('/user/<path:username>/<int:pin>')
def index(username, pin):
    # print(url_for('index'))
    return render_template('index.html', title='Index', menu=menu, username=username, pin=pin)


@app.route('/gamepad')
def gamepad():
    return render_template('gamepad.html', title='Gamepad', menu=menu)


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)

# with app.test_request_context():
#     print(url_for('home'))
#     print(url_for('game'))
#     print(url_for('about'))
#     print(url_for('index', username='user', pin=45))
