import os
import docx2txt
dirname = os.path.dirname(__file__)
target = os.path.join(dirname, "worddefs.json")
##source = os.path.join(dirname, "DEFINITIONS to GT - Part 1 - 17 Feb 2022.docx")
##source = os.path.join(dirname, "!!! DEFINITIONS Part 3 (1).docx")
source = os.path.join(dirname, "!!!! DEFINITIONS Part 4 'saber' to 'zoo'.docx")
oldlist = target
currdefs = open(oldlist, "r")
currdefdict = {}
for line in currdefs:
    if (line.find(":") != -1):
        pair = line.split('"')
        currdefdict[pair[1]] = pair[3]
currdefs.close()
doc = open(target, "w")
defs = docx2txt.process(source)

words = defs.split("\n")
doc.write("{\n")
for key in currdefdict.keys():
    doc.write('\t"' + key + '":"' + currdefdict[key] + '",\n')
for word in words:
    if (word.find("=") != -1):
        defpair = word.split("=")
        defpair[0] = defpair[0].replace(" ", "").replace("(", "").replace(")", "")
        if defpair[0] in currdefdict.keys():
            continue
        if (defpair[1].find("(") != -1):
            extras = defpair[1].split("(")
            extras = extras[1]
            extras.replace(" ", "")
            extras = extras[0:-1]
            extras = extras.replace(";", ",")
            extras = extras.split(",")
            for extra in extras:
                extra = extra.replace(" ", "").replace("(", "").replace(")", "")
                if (extra == defpair[0]):
                    continue
                doc.write('\t"' + extra + '":"' + defpair[1][0:defpair[1].index("(")-1] + '",\n')
            doc.write('\t"' + defpair[0] + '":"' + defpair[1][0:defpair[1].index("(")-1] + '",\n')
        else:
            doc.write('\t"' + defpair[0] + '":"' + defpair[1] + '",\n')
doc.write("}")
doc.close()
