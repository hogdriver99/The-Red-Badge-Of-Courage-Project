import os
import docx2txt
import json
dirname = os.path.dirname(__file__)
target = os.path.join(dirname, "wordders.json")
##source = os.path.join(dirname, "DEFINITIONS to GT - Part 1 - 17 Feb 2022.docx")
##source = os.path.join(dirname, "!!! DEFINITIONS Part 3 (1).docx")
source = os.path.join(dirname, "!!!! DEFINITIONS Part 4 'saber' to 'zoo'.docx")
oldlist = target
currwords = open(oldlist, "r")
jsonContent = currwords.read()
currworddict = json.loads(jsonContent)

currwords.close()
doc = open(target, "w")
ders = docx2txt.process(source)

newwords = ders.split("\n")
doc.write('{\n')
for key in currworddict:
    doc.write('\t"' + key + '":[')
    tempString = ''
    for temp in currworddict[key]:
        tempString += '"' + temp + '",'
    tempString = tempString[:-1]
    doc.write(tempString + '],\n')
for word in newwords:
    if (word.find("=") != -1):
        derpair = word.split("=")
        derpair[0] = derpair[0].replace(" ", "").replace("(", "").replace(")", "")
        if (derpair[0] in currworddict.keys()):
            continue
        if (derpair[1].find("(") != -1):
            extras = derpair[1].split("(")
            extras = extras[1]
            extras.replace(" ", "")
            extras = extras[0:-1]
            extras = extras.replace(";", ",")
            extras = extras.split(",")
            extraString = ''
            doc.write('\t"' + derpair[0] + '":[')
            for extra in extras:
                extra = extra.replace(" ", "").replace("(", "").replace(")", "")
                extraString += '"' + extra + '",'
            extraString = extraString[:-1]
            doc.write(extraString + '],\n')
            for extra in extras:
                if extra == derpair[0]:
                    continue
                extra = extra.replace(" ", "").replace("(", "").replace(")", "")
                doc.write('\t"' + extra + '":[' + extraString + '],\n')
        else:
            doc.write('\t"' + derpair[0] + '":["' + derpair[0] + '"],\n')
doc.write('}')
doc.close()