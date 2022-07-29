# import json
# #
# # with open('gita_chapter_1.json') as data:
# #     js = json.load(data)
# #     print(data)
# import requests
# import urllib.parse
# import urllib.request
# headers = {
# 		"X-RapidAPI-Key": "86e9e632afmshfda022347ad0052p10ae0ejsnb8817b74a4d5",
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
    for verseNumber in range(1, r):
        fileName = "../gita-verses/chapter-{chap}/gita_chapter_{chap}_verse_{number}.txt".format(chap=chapterNumber, number=verseNumber)
        with open(fileName, 'w') as f:
            for x in range(0, 6):
                if data[verseNumber - 1]["translations"][x]["language"] == "english":
                    trans = data[verseNumber - 1]["translations"][x]["description"]
                    stripped = trans.strip()
                    f.write(stripped)
                    print(stripped)
                    break
