import json

completeStuff = "{\n"
for chapterNumber in range(1, 8):
    completeStuff = "{\n"
    file = open('gita_chapter_{chap}.json'.format(chap=chapterNumber))
    data = json.load(file)
    r = len(data)+1
    fileName = "../gita-verses/chapter-{chap}/gita_translations_{chap}.json".format(chap=chapterNumber)
    for verseNumber in range(1, r):
        file = '../gita-verses/chapter-{chap}/gita_chapter_{chap}_verse_{verse}.txt'.format(chap=chapterNumber, verse=verseNumber)
        with open(file, 'r') as d:
            translation = str(d.read())
        title = "{chap}.{verse}".format(chap=chapterNumber, verse = verseNumber)
        completeStuff += "\t\""+title+"\":"+"\""+translation+"\",\n"
    with open(fileName, 'w') as f:
            f.write(completeStuff+"}")
            print(completeStuff)
