from python import csv2sql as g
from flask import Flask, redirect, url_for, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


# Get Data
@app.route('/',methods = ['POST', 'GET'])
def test():
   if request.method == 'POST':
      URL = request.form['url']
      Name = request.form['TN']
      g.main(URL,Name)
      return "'URL =>{0} ,welcome => {1}" .format(URL,Name)
      # return redirect(url_for('GetData',Address = URL,TableName = Name))
   else:
      URL = request.args.get('url')
      Name = request.args.get('TN')
      g.main(URL,Name)
      return "'URL =>{0} ,welcome => {1}" .format(URL,Name)
      # return redirect(url_for('GetData',Address = URL,TableName = Name))

if __name__ == '__main__':
   app.run(debug = True)



