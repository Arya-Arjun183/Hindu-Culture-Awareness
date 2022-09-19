# import json
# #
# # with open('gita_chapter_1.json') as data:
# #     js = json.load(data)
# #     print(data)
# import requests
# import urllib.parse
# import urllib.request
# headers = {
# 		"X-RapidAPI-Key": "insert key here",
# 		"X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com"
# }
# url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/{chapter}/verses/".format(chapter=1)
# response = requests.request("GET", url, headers=headers)
# print(response)
import json


for chapterNumber in range(1, 19):
    file = open('gita_chapter_{chap}.json'.format(chap=chapterNumber))
    data = json.load(file)
    r = len(data)+1
    completeStuff = ""
    for verseNumber in range(1, r):
        fileName = "./gita_translations_{chap}.json".format(chap=chapterNumber, number=verseNumber)
        for x in range(0, 6):
            if data[verseNumber - 1]["translations"][x]["language"] == "english":
                trans = data[verseNumber - 1]["translations"][x]["description"]
                stripped = trans.strip()
                title = "{chap}.{verse}".format(chap=chapterNumber, verse=verseNumber)
                completeStuff += "\t\"" + title + "\":" + "\"" + stripped + "\",\n"
                print(stripped)
                break
        with open(fileName, 'w') as f:
            f.write("{\n"+completeStuff+"\n}")

