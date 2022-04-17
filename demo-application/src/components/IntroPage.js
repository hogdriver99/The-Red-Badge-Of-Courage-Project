import crane from "../civilWarImages/crane.jpg"
import crane2 from "../civilWarImages/crane2.jpg"
import raw from 'raw.macro';
// import textFile from '../scripts/StephenCraneBiorgaphy.txt'

const IntroPage = () => {
//   let randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Neque volutpat ac tincidunt vitae semper. Ac tortor dignissim convallis aenean et. Sollicitudin nibh sit amet commodo nulla facilisi. Facilisi cras fermentum odio eu feugiat. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Accumsan tortor posuere ac ut consequat semper. Aliquet nibh praesent tristique magna sit amet. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Auctor elit sed vulputate mi sit. In iaculis nunc sed augue lacus viverra vitae."
//   randomText = randomText + randomText + randomText+ randomText + randomText + randomText + randomText
//   var text = raw('../scripts/StephenCraneBiography.txt');
    //detach newline characters from words
    // text = text.replaceAll("\n", " \n ");
    //detach register return from words
    // text = text.replaceAll("\r", " \r ");
    //create array of text using space as the delimiting token
    // readFile = text.split(" ");
    // let text = "Stephen Crane \n" +
    // "By the age of 22 Stephen Crane had composed his great novel <i>The Red Badge of Courage</i>, and only six years later died of tuberculosis having created a significant set of masterpieces amazing for someone so short-lived.\n" +
    // "Crane's revolutionary work introduced vital new subject matter, especially with his focus on and understanding of underclass characters, and his exploration of social forces which dominated their lives.  More important may have been his experimental 'impressionistic' method of presenting the interplay of dramatic sensations and emotions.  The masterworks he created in multiple genres'novel, short story, poetry'during a single decade can be matched by very few writers who outlived him by 40 or 50 years.\n" +
    // "Born in Newark, New Jersey on November 1, 1871, he was the 14th child of Jonathan Crane, a Methodist Episcopal church minister who wrote many religious texts, and his wife Mary, daughter of clergyman and a popular spokeswoman for the anti-alcohol Women's Christian Temperance Union. A sickly yet intelligent child, Crane was already reading at the age of 4.  In 1887 he became a student at Claverack College, excelling in baseball and in the school's military program.  Crane transferred to Lafayette College in 1890 for one semester, then to Syracuse University, seldom attending classes at either, focusing on baseball and social activities at both.\n" +
    // "At age 16, Crane had begun working summers at his brother Townley's local news bureau, and by age 19 had determined on a writing career. He first published journalism under his own name in February 1892, an article about Henry Stanley's African quest to discover the fate of missionary David Livingstone.  During this period he also anonymously published several prose sketches and short stories.\n" +
    // "At the age of 20, living with his brother Edmund in New Jersey, exploring aspects of life alien to his deeply religious upbringing, Crane found himself attracted to impoverished districts of nearby New York City, especially the saloons, dance halls, and brothels of The Bowery, and determined to be the first to write about it truthfully. In 1892, he began a relationship with a married woman, Lily Brandon Munroe, who over the following six years repeatedly refused to run away with him. \n" +
    // "While achieving only modest success as a free-lance writer, in 1893 Crane self-published his first novel Maggie: A Girl of the Streets, the tragic story of a principled young woman of the slums who becomes a victim of circumstances.  Crane managed to sell very few copies, was desperate for money, suffered from depression, but remained determined to succeed.  He had heard Civil War stories as a boy, received military training from Civil War veterans while in school, and read many articles about the Civil War as a young adult, but believed the printed texts focused almost exclusively on what the soldiers did, failing to truthfully communicate the soldiers' sensations or emotions. Determined to capture the personal essence of warfare, Crane began writing sketches about men in battle, afterward commenting that without realizing it during much of his boyhood he had been preparing to write <i>The Red Badge of Courage</i>.\n" +
    // "During the next year Crane supported himself as a free-lance journalist during the day, worked on the novel mostly from midnight to the early hours of the morning, and wrote free verse in the meantime, sometimes several poems in a day.  The Bacheller-Johnson Newspaper Syndicate accepted the novel in 1894.  In the first two weeks of December, when Crane was barely 23 years old, the novel was serialized in several newspapers to excellent reviews.\n" +
    // "In late January 1895, the Bacheller Syndicate sent him on an extensive trip through the American Midwest and South, and then to Mexico, returning to New York in May.  His book of experimental poetry, The Black Riders, was commercially published that month but received poor reviews.  Though having achieved some fame for his novel, he still struggled financially, living in near poverty, sometimes eating only one good meal a day, and constantly smoking despite his poor health. \n" +
    // "Impressed by the popularity of the novel's serialized version, Appleton published <i>The Red Badge of Courage</i> as a book in September 1895, two months before Crane's 24th birthday.  The novel received excellent reviews, remained a best seller for the remainder of the year, and went through 11 printings by 1896. \n" +
    // "In November 1896, while in Jacksonville, FL waiting to take a ship to Cuba to report on the war there, Crane met and became attached to Cora Taylor, a prominent woman who had abandoned two husbands and was the proprietor of a local bawdy house.  On New Year's Eve he boarded the SS Commodore bound for Cuba carrying $700 in gold (about $25,000 today) for expenses.  About 16 miles from Jacksonville the ship sank, Crane and others spent a day and a half trying to reach land before the boat overturned and the exhausted men finally made it to shore in Daytona, though one of them drowned.  Crane had lost all his money, but Cora brought him back to Jacksonville.  Newspaper reports treated Crane as a hero, and the experience provided the basis for his great short story 'The Open Boat' which he wrote a few weeks later and published in March for $300 (over $10,000 today).\n" +
    // "That same month he and Cora sailed to cover the Greco-Turkish war, arriving in Athens in early April.  There they both sent stories to American newspapers, she becoming the first female correspondent for that war.  After the 30-day war ended, they lived together in England as Mr. and Mrs. Crane.  His new novel The Third Violet received negative reviews, and though <i>The Red Badge of Courage</i> still sold well he badly needed money and rapidly wrote several short stories, among them some quite good ('The Monster' and 'Death and the Child'), some recognized masterpieces ('The Bride Comes to Yellow Sky' and 'The Blue Hotel').  \n" +
    // "On February 15,1898 the USS Maine exploded in Havana Harbor, sparking the Spanish-American War.  On assignment for Blackwood's Magazine he left England shortly after, despite his failing health, almost certainly due to the pulmonary tuberculosis which had afflicted him since childhood.  Over three months he filed 20 dispatches from Cuba, and carried messages to commanding officers under fire, earning formal praise from the military for his \"material aid during the action\".  Sent back to America in early July, he was diagnosed with both yellow fever and malaria. A few months later he returned to Cuba, filed a few more dispatches, finally leaving for England and a return to Cora in January 1899, suffering from ever more severe money problems.  He began writing furiously despite worsening health.  Late that year he experienced a severe pulmonary hemorrhage, and more early in the next year.\n" +
    // "On May 28, Crane and Cora arrived at a health spa in Badenweiler, Germany, where eight days later he died at the age of 28 on June 5, 1900.  His body was returned to America where he was buried in Evergreen Cemetery in Hillside, NJ."
  
    // function populatePre(url) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function () {
    //         document.getElementById('contents').textContent = this.responseText;
    //     };
    //     xhr.open('GET', url);
    //     xhr.send();
    //     console.log("HEYY")
    // }
    // populatePre('../scripts/StephenCraneBiorgaphy.txt');

    // fetch("../scripts/StephenCraneBiorgaphy.txt")
	// .then((response) => {
  	// 	return response.text();
	// })
	// .then((text) => {
  	// 	console.log(text);
	// });
    let text = "    By the age of 22 Stephen Crane had composed his great novel The Red Badge \nof Courage, and only six years later died of tuberculosis having created a significant set \n" +
    " of masterpieces amazing for someone so short-lived.\n" +
    "    Crane\'s revolutionary work introduced vital new subject matter, especially with \n" + 
    "his focus on and understanding of underclass characters, and his exploration of social \n" +
    "forces which dominated their lives.  More important may have been his experimental \n" +
    "\'impressionistic\' method of presenting the interplay of dramatic sensations and \n" +
    "emotions.  The masterworks he created in multiple genres\'novel, short story, poetry?\n" +
    "during a single decade can be matched by very few writers who outlived him by 40 or \n" +
    "50 years.  \n" +
    "    Born in Newark, New Jersey on November 1, 1871, he was the 14th child of \n" +
    "Jonathan Crane, a Methodist Episcopal church minister who wrote many religious texts, \n" +
    "and his wife Mary, daughter of clergyman and a popular spokeswoman for the anti-\n" +
    "alcohol Women?s Christian Temperance Union. A sickly yet intelligent child, Crane was \n" +
    "already reading at the age of 4.  In 1887 he became a student at Claverack College, \n" +
    "excelling in baseball and in the school?s military program.  Crane transferred to \n" +
    "Lafayette College in 1890 for one semester, then to Syracuse University, seldom \n" +
    "attending classes at either, focusing on baseball and social activities at both.  \n" +
    "    At age 16, Crane had begun working summers at his brother Townley?s local \n" +
    "news bureau, and by age 19 had determined on a writing career. He first published \n" +
    "journalism under his own name in February 1892, an article about Henry Stanley?s \n" +
    "African quest to discover the fate of missionary David Livingstone.  During this period he \n" +
    "also anonymously published several prose sketches and short stories.\n" +
    "    At the age of 20, living with his brother Edmund in New Jersey, exploring aspects \n" +
    "of life alien to his deeply religious upbringing, Crane found himself attracted to \n" +
    "impoverished districts of nearby New York City, especially the saloons, dance halls, and \n" +
    "brothels of The Bowery, and determined to be the first to write about it truthfully. In \n" +
    "1892, he began a relationship with a married woman, Lily Brandon Munroe, who over \n" +
    "the following six years repeatedly refused to run away with him.  \n" +
    "    While achieving only modest success as a free-lance writer, in 1893 Crane self-\n" +
    "published his first novel Maggie: A Girl of the Streets, the tragic story of a principled \n" +
    "young woman of the slums who becomes a victim of circumstances.  Crane managed to \n" +
    "sell very few copies, was desperate for money, suffered from depression, but remained \n" +
    "determined to succeed.  He had heard Civil War stories as a boy, received military \n" +
    "training from Civil War veterans while in school, and read many articles about the Civil \n" +
    "War as a young adult, but believed the printed texts focused almost exclusively on what \n" +
    "the soldiers did, failing to truthfully communicate the soldiers? sensations or emotions. \n" +
    "Determined to capture the personal essence of warfare, Crane began writing sketches \n" +
    "about men in battle, afterward commenting that without realizing it during much of his \n" +
    "boyhood he had been preparing to write <i>The Red Badge of Courage</i>.   \n" +
    "    During the next year Crane supported himself as a free-lance journalist during \n" +
    "the day, worked on the novel mostly from midnight to the early hours of the morning, \n" +
    "and wrote free verse in the meantime, sometimes several poems in a day.  The \n" +
    "Bacheller-Johnson Newspaper Syndicate accepted the novel in 1894.  In the first two \n" +
    "weeks of December, when Crane was barely 23 years old, the novel was serialized in \n" +
    "several newspapers to excellent reviews.  \n" +
    "    In late January 1895, the Bacheller Syndicate sent him on an extensive trip \n" +
    "through the American Midwest and South, and then to Mexico, returning to New York in \n" +
    "May.  His book of experimental poetry, The Black Riders, was commercially published \n" +
    "that month but received poor reviews.  Though having achieved some fame for his \n" +
    "novel, he still struggled financially, living in near poverty, sometimes eating only one \n" +
    "good meal a day, and constantly smoking despite his poor health.  \n" +
    "    Impressed by the popularity of the novel?s serialized version, Appleton published \n" +
    "<i>The Red Badge of Courage</i> as a book in September 1895, two months before Crane?s \n" +
    "24th birthday.  The novel received excellent reviews, remained a best seller for the \n" +
    "remainder of the year, and went through 11 printings by 1896. \n" +
    "    In November 1896, while in Jacksonville, FL waiting to take a ship to Cuba to \n" +
    "report on the war there, Crane met and became attached to Cora Taylor, a prominent \n" +
    "woman who had abandoned two husbands and was the proprietor of a local bawdy \n" +
    "house.  On New Year?s Eve he boarded the SS Commodore bound for Cuba carrying \n" +
    "$700 in gold (about $25,000 today) for expenses.  About 16 miles from Jacksonville the \n" +
    "ship sank, Crane and others spent a day and a half trying to reach land before the boat \n" +
    "overturned and the exhausted men finally made it to shore in Daytona, though one of \n" +
    "them drowned.  Crane had lost all his money, but Cora brought him back to \n" +
    "Jacksonville.  Newspaper reports treated Crane as a hero, and the experience provided \n" +
    "the basis for his great short story ?The Open Boat? which he wrote a few weeks later \n" +
    "and published in March for $300 (over $10,000 today).\n" +
    "    That same month he and Cora sailed to cover the Greco-Turkish war, arriving in \n" +
    "Athens in early April.  There they both sent stories to American newspapers, she \n" +
    "becoming the first female correspondent for that war.  After the 30-day war ended, they \n" +
    "lived together in England as Mr. and Mrs. Crane.  His new novel The Third Violet \n" +
    "received negative reviews, and though <i>The Red Badge of Courage</i> still sold well he \n" +
    "badly needed money and rapidly wrote several short stories, among them some quite \n" +
    "good (?The Monster? and ?Death and the Child?), some recognized masterpieces (?The \n" +
    "Bride Comes to Yellow Sky? and ?The Blue Hotel?).   \n" +
    "    On February 15,1898 the USS Maine exploded in Havana Harbor, sparking the \n" +
    "Spanish-American War.  On assignment for Blackwood?s Magazine he left England \n" +
    "shortly after, despite his failing health, almost certainly due to the pulmonary \n" +
    "tuberculosis which had afflicted him since childhood.  Over three months he filed 20 \n" +
    "dispatches from Cuba, and carried messages to commanding officers under fire, \n" +
    "earning formal praise from the military for his \"material aid during the action\".  Sent back \n" +
    "to America in early July, he was diagnosed with both yellow fever and malaria. A few \n" +
    "months later he returned to Cuba, filed a few more dispatches, finally leaving for \n" +
    "England and a return to Cora in January 1899, suffering from ever more severe money \n" +
    "problems.  He began writing furiously despite worsening health.  Late that year he \n" +
    "experienced a severe pulmonary hemorrhage, and more early in the next year.\n" +
    "    On May 28, Crane and Cora arrived at a health spa in Badenweiler, Germany, \n" +
    "where eight days later he died at the age of 28 on June 5, 1900.  His body was returned \n" +
    "to America where he was buried in Evergreen Cemetery in Hillside, NJ."

    return (
    <div className='bookContainerIntro'>
        <div className='book'>
            <div className="intro">
                <h2 id="item">Stephen Crane</h2>
                <div className="craneImg" id="item">
                    <img id='crane' src={crane}/>
                </div>

                <div className="introText" >
                    <p id="introP">&emsp;By the age of 22 Stephen Crane had composed his great novel <i>The Red Badge of Courage</i>, and only six years later died of tuberculosis having created a significant set of masterpieces amazing for someone so short-lived.</p>
                    <p id="introP">&emsp;Crane’s revolutionary work introduced vital new subject matter, especially with his focus on and understanding of underclass characters, and his exploration of social forces which dominated their lives.  More important may have been his experimental ‘impressionistic’ method of presenting the interplay of dramatic sensations and emotions.  The masterworks he created in multiple genres—novel, short story, poetry—during a single decade can be matched by very few writers who outlived him by 40 or 50 years.</p>
                    <p id="introP" >&emsp;Born in Newark, New Jersey on November 1, 1871, he was the 14th child of Jonathan Crane, a Methodist Episcopal church minister who wrote many religious texts, and his wife Mary, daughter of clergyman and a popular spokeswoman for the anti-alcohol Women’s Christian Temperance Union. A sickly yet intelligent child, Crane was already reading at the age of 4.  In 1887 he became a student at Claverack College, excelling in baseball and in the school’s military program.  Crane transferred to Lafayette College in 1890 for one semester, then to Syracuse University, seldom attending classes at either, focusing on baseball and social activities at both.  </p>
                    <p id="introP" >&emsp;At age 16, Crane had begun working summers at his brother Townley’s local news bureau, and by age 19 had determined on a writing career. He first published journalism under his own name in February 1892, an article about Henry Stanley’s African quest to discover the fate of missionary David Livingstone.  During this period he also anonymously published several prose sketches and short stories. </p>
                    <p id="introP" >&emsp;At the age of 20, living with his brother Edmund in New Jersey, exploring aspects of life alien to his deeply religious upbringing, Crane found himself attracted to impoverished districts of nearby New York City, especially the saloons, dance halls, and brothels of The Bowery, and determined to be the first to write about it truthfully. In 1892, he began a relationship with a married woman, Lily Brandon Munroe, who over the following six years repeatedly refused to run away with him. </p>
                    <p id="introP" >&emsp;While achieving only modest success as a free-lance writer, in 1893 Crane self-published his first novel <i>Maggie: A Girl of the Streets</i>, the tragic story of a principled young woman of the slums who becomes a victim of circumstances.  Crane managed to sell very few copies, was desperate for money, suffered from depression, but remained determined to succeed.  He had heard Civil War stories as a boy, received military training from Civil War veterans while in school, and read many articles about the Civil War as a young adult, but believed the printed texts focused almost exclusively on what the soldiers did, failing to truthfully communicate the soldiers’ sensations or emotions. Determined to capture the personal essence of warfare, Crane began writing sketches about men in battle, afterward commenting that without realizing it during much of his boyhood he had been preparing to write <i>The Red Badge of Courage</i>.    </p>
                    <p id="introP" >&emsp;During the next year Crane supported himself as a free-lance journalist during the day, worked on the novel mostly from midnight to the early hours of the morning, and wrote free verse in the meantime, sometimes several poems in a day.  The Bacheller-Johnson Newspaper Syndicate accepted the novel in 1894.  In the first two weeks of December, when Crane was barely 23 years old, the novel was serialized in several newspapers to excellent reviews.   </p>
                    <p id="introP" >&emsp;In late January 1895, the Bacheller Syndicate sent him on an extensive trip through the American Midwest and South, and then to Mexico, returning to New York in May.  His book of experimental poetry, <i>The Black Riders</i>, was commercially published that month but received poor reviews.  Though having achieved some fame for his novel, he still struggled financially, living in near poverty, sometimes eating only one good meal a day, and constantly smoking despite his poor health.   </p>
                    <p id="introP" >&emsp;Impressed by the popularity of the novel’s serialized version, Appleton published <i>The Red Badge of Courage</i> as a book in September 1895, two months before Crane’s 24th birthday.  The novel received excellent reviews, remained a best seller for the remainder of the year, and went through 11 printings by 1896.  </p>
                    <p id="introP" >&emsp;In November 1896, while in Jacksonville, FL waiting to take a ship to Cuba to report on the war there, Crane met and became attached to Cora Taylor, a prominent woman who had abandoned two husbands and was the proprietor of a local bawdy house.  On New Year’s Eve he boarded the SS Commodore bound for Cuba carrying $700 in gold (about $25,000 today) for expenses.  About 16 miles from Jacksonville the ship sank, Crane and others spent a day and a half trying to reach land before the boat overturned and the exhausted men finally made it to shore in Daytona, though one of them drowned.  Crane had lost all his money, but Cora brought him back to Jacksonville.  Newspaper reports treated Crane as a hero, and the experience provided the basis for his great short story “The Open Boat” which he wrote a few weeks later and published in March for $300 (over $10,000 today). </p>
                    <p id="introP" >&emsp;That same month he and Cora sailed to cover the Greco-Turkish war, arriving in Athens in early April.  There they both sent stories to American newspapers, she becoming the first female correspondent for that war.  After the 30-day war ended, they lived together in England as Mr. and Mrs. Crane.  His new novel <i>The Third Violet </i>received negative reviews, and though <i>The Red Badge of Courage</i> still sold well he badly needed money and rapidly wrote several short stories, among them some quite good (“The Monster” and “Death and the Child”), some recognized masterpieces (“The Bride Comes to Yellow Sky” and “The Blue Hotel”).    </p>
                    <p id="introP" >&emsp;On February 15,1898 the USS Maine exploded in Havana Harbor, sparking the Spanish-American War.  On assignment for <i>Blackwood’s Magazine</i> he left England shortly after, despite his failing health, almost certainly due to the pulmonary tuberculosis which had afflicted him since childhood.  Over three months he filed 20 dispatches from Cuba, and carried messages to commanding officers under fire, earning formal praise from the military for his "material aid during the action".  Sent back to America in early July, he was diagnosed with both yellow fever and malaria. A few months later he returned to Cuba, filed a few more dispatches, finally leaving for England and a return to Cora in January 1899, suffering from ever more severe money problems.  He began writing furiously despite worsening health.  Late that year he experienced a severe pulmonary hemorrhage, and more early in the next year. </p>
                    <p id="introP" >&emsp;On May 28, Crane and Cora arrived at a health spa in Badenweiler, Germany, where eight days later he died at the age of 28 on June 5, 1900.  His body was returned to America where he was buried in Evergreen Cemetery in Hillside, NJ. </p>
    
                    {/* <pre id="item">{text}</pre> */}
                </div>
                
                {/* <embed src={textFile}></embed> */}
                <div className="craneImg2" id="item">
                    <img id='crane' src={crane2} />
                </div>
            </div>
        </div>
    </div>
  )
};

export default IntroPage;


// 
{/* <div>

<p style='margin-left:2.0in;text-indent:.5in'><b><span
style='font-size:14.0pt;line-height:107%;font-family:"Arial",sans-serif'>Stephen
Crane</span></b></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif'>By the age of 22 Stephen Crane
had composed his great novel <i><i>The Red Badge of Courage</i></i>, and only six
years later died of tuberculosis having created a significant set of
masterpieces amazing for someone so short-lived. </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif'>Crane’s revolutionary work
introduced vital new subject matter, especially with his focus on and
understanding of underclass characters, and his exploration of social forces
which dominated their lives.<span style='mso-spacerun:yes'>  </span>More
important may have been his experimental ‘impressionistic’ method of presenting
the interplay of dramatic sensations and emotions.<span
style='mso-spacerun:yes'>  </span>The masterworks he created in multiple
genres—novel, short story, poetry—during a single decade can be matched by very
few writers who outlived him by 40 or 50 years.<span style='mso-spacerun:yes'> 
</span> </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif'>Born in Newark, New Jersey on
November 1, 1871, he was the 14th child of Jonathan Crane, a Methodist
Episcopal church minister who wrote many religious texts, and his wife Mary,
daughter of clergyman and </span><span style='font-size:12.0pt;line-height:
107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>a popular spokeswoman for the anti-alcohol Women’s Christian
Temperance Union. A sickly yet intelligent child, Crane was already reading at
the age of 4.<span style='mso-spacerun:yes'>  </span>In 1887 he became a
student at Claverack College, excelling in baseball and in the school’s military
program.<span style='mso-spacerun:yes'>  </span>Crane transferred to Lafayette
College in 1890 for one semester, then to Syracuse University, seldom attending
classes at either, focusing on baseball and social activities at both.<span
style='mso-spacerun:yes'>  </span> </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>At age 16, Crane had begun working summers at his brother
Townley’s local news bureau, and by age 19 had determined on a writing career.
He first published journalism under his own name in February 1892, an article
about Henry Stanley’s African quest to discover the fate of missionary David
Livingstone.<span style='mso-spacerun:yes'>  </span>During this he also anonymously published several prose sketches
and short stories. </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>At the age of 20, living with his brother Edmund in New Jersey, exploring
aspects of life alien to his deeply religious upbringing, Crane found himself
attracted to impoverished districts of nearby New York City, especially the
saloons, dance halls, and brothels of The Bowery, and determined to be the
first to write about it truthfully. In 1892, he began a relationship with a
married woman, Lily Brandon Munroe, who over the following six years repeatedly
refused to run away with him.<span style='mso-spacerun:yes'>  </span> </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>While achieving only modest success as a free-lance writer, in
1893 Crane self-published his first novel <i>Maggie: A Girl of the Streets,</i>
the tragic story of a principled young woman of the slums who becomes a victim
of circumstances. <span style='mso-spacerun:yes'> </span>Crane managed to sell
very few copies, was desperate for money, suffered from depression, but
remained determined to succeed.<span style='mso-spacerun:yes'>  </span>He had
heard Civil War stories as a boy, received military training from Civil War
veterans while in school, and read many articles about the Civil War as a young
adult, but believed the printed texts focused almost exclusively on what the
soldiers did, failing to truthfully communicate the soldiers’ sensations or
emotions. Determined to capture the personal essence of warfare, Crane began
writing sketches about men in battle, afterward commenting that without
realizing it during much of his boyhood he had been preparing to write <i>The
Red Badge of Courage.</i><span style='mso-spacerun:yes'>  </span><span
style='mso-spacerun:yes'> </span> </span></p>

<p  style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>During the next year Crane supported himself as a free-lance
journalist during the day, worked on the novel mostly from midnight to the
early hours of the morning, and wrote free verse in the meantime, sometimes
several poems in a day.<span style='mso-spacerun:yes'>  </span>The Bacheller-Johnson
Newspaper Syndicate accepted the novel in 1894.<span style='mso-spacerun:yes'> 
</span>In the first two weeks of December, when Crane was barely 23 years old, the
novel was serialized in several newspapers to excellent reviews.<span
style='mso-spacerun:yes'>  </span> </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>In late January 1895, the Bacheller Syndicate sent him on an
extensive trip through the American Midwest and South, and then to Mexico,
returning to New York in May.<span style='mso-spacerun:yes'>  </span>His book
of experimental poetry, <i>The Black Riders</i>, was commercially published
that month but received poor reviews.<span style='mso-spacerun:yes'>  </span>Though
having achieved some fame for his novel, he still struggled financially, living
in near poverty, sometimes eating only one good meal a day, and constantly
smoking despite his poor health.<span style='mso-spacerun:yes'>  </span> </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>Impressed by the popularity of the novel’s serialized version,
Appleton published <i><i>The Red Badge of Courage</i></i> as a book in September 1895,
two months before Crane’s 24<sup>th</sup> birthday.<span
style='mso-spacerun:yes'>  </span>The novel received excellent reviews,
remained a best seller for the remainder of the year, and went through 11
printings by 1896.  </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>In November 1896, while in Jacksonville, FL waiting to take a
ship to Cuba to report on the war there, Crane met and became attached to Cora
Taylor, a prominent woman who had abandoned two husbands and was the proprietor
of a local bawdy house.<span style='mso-spacerun:yes'>  </span>On New Year’s
Eve he boarded the SS Commodore bound for Cuba carrying $700 in gold (about
$25,000 today) for expenses.<span style='mso-spacerun:yes'>  </span>About 16
miles from Jacksonville the ship sank, Crane and others spent a day and a half
trying to reach land before the boat overturned and the exhausted men finally
made it to shore in Daytona, though one of them drowned.<span
style='mso-spacerun:yes'>  </span>Crane had lost all his money, but Cora
brought him back to Jacksonville.<span style='mso-spacerun:yes'> 
</span>Newspaper reports treated Crane as a hero, and the experience provided
the basis for his great short story “The Open Boat” which he wrote a few weeks
later and published in March for $300 (over $10,000 today). </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>That same month he and Cora sailed to cover the Greco-Turkish
war, arriving in Athens in early April.<span style='mso-spacerun:yes'> 
</span>There they both sent stories to American newspapers, she 
the first female correspondent for that war.<span
style='mso-spacerun:yes'>  </span>After the 30-day war ended, they lived
together in England as Mr. and Mrs. Crane.<span style='mso-spacerun:yes'> 
</span>His new novel <i>The Third Violet</i> received negative reviews, and
though <i><i>The Red Badge of Courage</i></i> still sold well he badly needed money
and rapidly wrote several short stories, among them some quite good (“The
Monster” and “Death and the Child”), some recognized masterpieces (“The Bride
Comes to Yellow Sky” and “The Blue Hotel”).<span style='mso-spacerun:yes'>  
</span> </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>On February 15,1898 the USS Maine exploded in Havana Harbor,
sparking the Spanish-American War.<span style='mso-spacerun:yes'>  </span>On
assignment for <i>Blackwood’s Magazine</i> he left England shortly after,
despite his failing health, almost certainly due to the pulmonary tuberculosis
which had afflicted him since childhood.<span style='mso-spacerun:yes'> 
</span>Over three months he filed 20 dispatches from Cuba, and carried messages
to commanding officers under fire, earning formal praise from the military for
his &quot;material aid during the action&quot;.<span style='mso-spacerun:yes'> 
</span>Sent back to America in early July, he was diagnosed with both yellow
fever and malaria. A few months later he returned to Cuba, filed a few more dispatches,
finally leaving for England and a return to Cora in January 1899, suffering
from ever more severe money problems.<span style='mso-spacerun:yes'>  </span>He
began writing furiously despite worsening health.<span
style='mso-spacerun:yes'>  </span>Late that year he experienced a severe
pulmonary hemorrhage, and more early in the next year. </span></p>

<p style='text-indent:.5in'><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;mso-fareast-font-family:"Times New Roman";
color:#202122'>On May 28, Crane and Cora arrived at a health spa in 
, Germany, where eight days later he died at the
age of 28 on June 5, 1900.<span style='mso-spacerun:yes'>  </span>His body was returned
to America where he was buried in Evergreen Cemetery in Hillside, NJ.</span><span
style='font-size:12.0pt;line-height:107%'> </span></p>

</div> */}