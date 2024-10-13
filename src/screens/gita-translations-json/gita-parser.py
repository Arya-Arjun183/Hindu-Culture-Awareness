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
import os
import requests

headers = {
    "X-RapidAPI-Key": "insert key here",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com"
}

def download_translations(trans_folder):
    for chapterNumber in range(1, 19):

        file_name = "./{translation_folder}/gita_chapter_{chapterNumber}.json".format(translation_folder=trans_folder,
                                                                                      chapterNumber=chapterNumber)
        print(f"downloading chapter: {chapterNumber} to {file_name}")

        url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/{chapter}/verses/".format(chapter=chapterNumber)
        response = requests.request("GET", url, headers=headers)
        print(response)
        with open(file_name, 'w') as f:
            json.dump(response.text, f)

def write_translation(download_folder, lang, author, trans_folder):
    for chapterNumber in range(1, 19):
        file = open('./{download_folder}/gita_chapter_{chap}.json'.format(download_folder=download_folder,chap=chapterNumber))
        data = json.load(file)
        data = json.loads(data)
        r = len(data)+1
        completeStuff = ""
        for verseNumber in range(1, r):
            fileName = "./{trans_folder}/gita_chapter_{chap}.json".format(trans_folder=trans_folder,
                                                                         chap=chapterNumber, number=verseNumber)

            for x in range(0, 6):
                if data[verseNumber - 1]["translations"][x]["language"] == lang\
                        and data[verseNumber - 1]["translations"][x]["author_name"] ==author:
                    trans = data[verseNumber - 1]["translations"][x]["description"]
                    stripped = trans.strip()
                    title = "{chap}.{verse}".format(chap=chapterNumber, verse=verseNumber)
                    completeStuff += "\t\"" + title + "\":" + "\"" + stripped + "\",\n"
                    print(stripped)
                    break
            with open(fileName, 'w') as f:
                f.write("{\n"+completeStuff+"\n}")

if __name__ == '__main__':
    download_folder = "translation_downloads"
    if not os.path.exists(download_folder):
        os.makedirs(download_folder)
    #download_translations(download_folder)

    translation_folder = "gita-translations-json"
    if not os.path.exists(translation_folder):
        os.makedirs(translation_folder)
    if not os.path.exists(translation_folder + "/english"):
        os.makedirs(translation_folder + "/english")
    if not os.path.exists(translation_folder + "/hindi"):
        os.makedirs(translation_folder + "/hindi")

    english_author_name="Swami Adidevananda"
    hindi_author_name = "Swami Tejomayananda"
    write_translation(download_folder, "english", english_author_name,translation_folder+"/english")
    write_translation(download_folder, "hindi", hindi_author_name,translation_folder+"/hindi")