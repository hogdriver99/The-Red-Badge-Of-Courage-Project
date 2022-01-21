from flask import Flask, render_template, redirect, url_for, request, make_response
app = Flask(__name__)

fileArr = []
pageNum = ''

def fileFormatter(txtfile, page):
    count = 0
    firstbreak = 0
    lastbreak = 0
    for line in txtfile:
        if line == "Chapter 1\n":
            firstbreak = count
        if line == "THE END\n":
            lastbreak = count
        count += 1
    txtfile = txtfile[firstbreak:lastbreak]
    fileArr = txtfile
    pageNum = page

@app.route('/file', methods=['GET', 'POST'])
def getFile():
    if request.method=='POST':
        rawFile = open('../73.txt', 'r')
        txtfile = rawFile.readlines()
        page = 1
        fileFormatter(txtfile, page)

@app.route('/page', methods=["POST", "GET"])
def getPage():
    message = None
    if request.method=='POST':
        page = request.form['mydata']
        if page == 1:
            result = fileArr[:50]
        resp = make_response('{"response": '+result+'}')
        resp.headers['Content-Type'] = "text"
        return resp

if __name__ == "__main__":
    app.run(debug=True)