// ==UserScript==
// @name           Mod Tools in toolbar (with move)
// @namespace      GLB
// @include  http://goallineblitz.com/game/forum_thread.pl?thread_id=*
// ==/UserScript==
//game/design/dark_content_container.jpg


function getElementsByClassName(classname, par){
  var a=[];   
  var re = new RegExp('\\b' + classname + '\\b');      
  var els = par.getElementsByTagName("*"); 
  for(var i=0,j=els.length; i<j; i++){       
    if(re.test(els[i].className)){  
      a.push(els[i]);
    }
  }
  return a;
};

function deleteThread() {
		if (confirm("Really delete this thread?")) {
			window.location = forum + '&delete=0';
		}
}

function move() {
		if (confirm("Really move this thread?")) {
			var temp = move_textbox.value
			var moveurl = "http://goallineblitz.com/game/forum_thread_move.pl?thread_id=" + thread2[0] + "&from_forum_id=" + test2[0] + "&forum_id=" + temp + "&action=Move"
			window.location = moveurl
		}
}

function moveVisible() {
			move_button.setAttribute('style', 'border-style: solid; border-width: 1px; background: url(http://goallineblitz.com/images/game/design/dark_content_container.jpg);background-repeat: repeat; width: 362px; height: 50px; position: absolute; left: 362px; top: 200px;');
			move_tab.removeEventListener("click", moveVisible, false)
			move_tab.addEventListener("click", moveHidden, false)
		}

function moveHidden() {
			move_button.setAttribute('style', 'position: absolute; left: 500px; top: 200px; visibility:hidden');
			move_tab.removeEventListener("click", moveHidden, false)
			move_tab.addEventListener("click", moveVisible, false)
		}
function moveBoxChange() {
			move_textbox.value = move_dropdown.value
		}

var url = document.location.href;
var thread = url.split("thread_id=", 2);
var thread2 = thread[1].split("&", 2);
var str1 = getElementsByClassName("big_head subhead_head", document);
var str = str1[0].innerHTML;
var test = str.split('/game/forum_thread_list.pl?forum_id=', 5);
var test_length = test.length - 1;
var test2 = test[test_length].split("\"", 2);
var forum = "http://goallineblitz.com/game/forum_thread_list.pl?forum_id=" + test2[0] + "&thread_id=" + thread2[0];
var sticky = forum + "&sticky=1";
var lock = forum + "&lock=1";
var lock_button = document.createElement('div');
lock_button.setAttribute('class', 'tab_off');
lock_button.innerHTML = '<a href="' + lock + '">Lock</a>';
var sticky_button = document.createElement('div');
sticky_button.setAttribute('class', 'tab_off');
sticky_button.innerHTML = '<a href="' + sticky + '">Sticky</a>';
var modbar = getElementsByClassName("subhead_link_bar", document);
modbar[0].innerHTML = modbar[0].innerHTML;
var unsticky = forum + "&sticky=0";
var unlock = forum + "&lock=0";
var unlock_button = document.createElement('div');
unlock_button.setAttribute('class', 'tab_off');
unlock_button.innerHTML = '<a href="' + unlock + '">Un-Lock</a>';
var unsticky_button = document.createElement('div');
unsticky_button.setAttribute('class', 'tab_off');
unsticky_button.innerHTML = '<a>Delete</a>';
modbar[0].appendChild(unsticky_button);
modbar[0].appendChild(lock_button);
modbar[0].appendChild(sticky_button);
unsticky_button.addEventListener("click", deleteThread, false)

var move_button = document.createElement('div');
move_button.setAttribute('class', 'tab_off');
move_button.setAttribute('style', 'position: absolute; left: 500px; top: 200px; visibility:hidden');
var move_textbox = document.createElement('input');
move_textbox.setAttribute('type', 'textbox');
move_textbox.setAttribute('value', '0');
var move_input = document.createElement('input');
move_input.setAttribute('type', 'button');
move_input.setAttribute('value', 'Move');
move_input.addEventListener("click", move, false)

var move_tab = document.createElement('div');
move_tab.setAttribute('class', 'tab_off');
move_tab.innerHTML = '<a>Move</a>';
modbar[0].appendChild(move_button);
modbar[0].appendChild(move_tab);
move_tab.addEventListener("click", moveVisible, false)
var code = "<option value='0'>Select a Forum...</option> <option value='1186'> - Africa A #1</option> <option value='1187'> - Africa A #2</option> <option value='1188'> - Africa A #3</option> <option value='1189'> - Africa A #4</option> <option value='1190'> - Africa A #5</option> <option value='1191'> - Africa A #6</option> <option value='1192'> - Africa A #7</option> <option value='1193'> - Africa A #8</option> <option value='1184'> - Africa A League</option> <option value='146'> - Africa AA #1</option> <option value='147'> - Africa AA #2</option> <option value='148'> - Africa AA #3</option> <option value='149'> - Africa AA #4</option> <option value='143'> - Africa AA League</option> <option value='144'> - Africa AAA #1</option> <option value='145'> - Africa AAA #2</option> <option value='142'> - Africa AAA League</option> <option value='141'> - Africa Pro League</option> <option value='196'> - African Press Releases</option> <option value='134'> - Baseball</option> <option value='132'> - Basketball</option> <option value='139'> - Boxing and MMA</option> <option value='102'> - Canada AA #1</option> <option value='103'> - Canada AA #2</option> <option value='104'> - Canada AA #3</option> <option value='105'> - Canada AA #4</option> <option value='100'> - Canada AAA #1</option> <option value='101'> - Canada AAA #2</option> <option value='188'> - Canadian A #1</option> <option value='189'> - Canadian A #2</option> <option value='190'> - Canadian A #3</option> <option value='191'> - Canadian A #4</option> <option value='192'> - Canadian A #5</option> <option value='193'> - Canadian A #6</option> <option value='194'> - Canadian A #7</option> <option value='195'> - Canadian A #8</option> <option value='187'> - Canadian A Leagues</option> <option value='47'> - Canadian AA Leagues</option> <option value='46'> - Canadian AAA Leagues</option> <option value='1168'> - Canadian BBB #1</option> <option value='1177'> - Canadian BBB #10</option> <option value='1178'> - Canadian BBB #11</option> <option value='1179'> - Canadian BBB #12</option> <option value='1180'> - Canadian BBB #13</option> <option value='1181'> - Canadian BBB #14</option> <option value='1182'> - Canadian BBB #15</option> <option value='1183'> - Canadian BBB #16</option> <option value='1169'> - Canadian BBB #2</option> <option value='1170'> - Canadian BBB #3</option> <option value='1171'> - Canadian BBB #4</option> <option value='1172'> - Canadian BBB #5</option> <option value='1173'> - Canadian BBB #6</option> <option value='1174'> - Canadian BBB #7</option> <option value='1175'> - Canadian BBB #8</option> <option value='1176'> - Canadian BBB #9</option> <option value='1167'> - Canadian BBB Leagues</option> <option value='56'> - Canadian Press Releases</option> <option value='45'> - Canadian Pro League</option> <option value='158'> - CB Club</option> <option value='234'> - CB/S Lv. 14 - 18</option> <option value='235'> - CB/S Lv. 19 - 25</option> <option value='236'> - CB/S Lv. 26+</option> <option value='232'> - CB/S Lv. 8 and Under</option> <option value='233'> - CB/S Lv. 9 - 13</option> <option value='29'> - Cornerbacks and Safeties</option> <option value='157'> - D Line Club</option> <option value='26'> - Defensive Line</option> <option value='219'> - DL Lv. 14 - 18</option> <option value='220'> - DL Lv. 19 - 25</option> <option value='221'> - DL Lv. 26+</option> <option value='217'> - DL Lv. 8 and Under</option> <option value='218'> - DL Lv. 9 - 13</option> <option value='1945'> - Epic Suggestions</option> <option value='252'> - Europe East A #1</option> <option value='253'> - Europe East A #2</option> <option value='254'> - Europe East A #3</option> <option value='255'> - Europe East A #4</option> <option value='256'> - Europe East A #5</option> <option value='257'> - Europe East A #6</option> <option value='258'> - Europe East A #7</option> <option value='259'> - Europe East A #8</option> <option value='251'> - Europe East A Leagues</option> <option value='108'> - Europe East AA #1</option> <option value='109'> - Europe East AA #2</option> <option value='110'> - Europe East AA #3</option> <option value='111'> - Europe East AA #4</option> <option value='50'> - Europe East AA Leagues</option> <option value='106'> - Europe East AAA #1</option> <option value='107'> - Europe East AAA #2</option> <option value='49'> - Europe East AAA Leagues</option> <option value='65'> - Europe East Alternative Languages Forum</option> <option value='2784'> - Europe East BBB #1</option> <option value='2793'> - Europe East BBB #10</option> <option value='2785'> - Europe East BBB #2</option> <option value='2786'> - Europe East BBB #3</option> <option value='2787'> - Europe East BBB #4</option> <option value='2788'> - Europe East BBB #5</option> <option value='2789'> - Europe East BBB #6</option> <option value='2790'> - Europe East BBB #7</option> <option value='2791'> - Europe East BBB #8</option> <option value='2792'> - Europe East BBB #9</option> <option value='2783'> - Europe East BBB Leagues</option> <option value='58'> - Europe East Press Releases</option> <option value='48'> - Europe East Pro League</option> <option value='177'> - Europe West A Leagues</option> <option value='114'> - Europe West AA #1</option> <option value='115'> - Europe West AA #2</option> <option value='116'> - Europe West AA #3</option> <option value='117'> - Europe West AA #4</option> <option value='53'> - Europe West AA League</option> <option value='112'> - Europe West AAA #1</option> <option value='113'> - Europe West AAA #2</option> <option value='52'> - Europe West AAA League</option> <option value='54'> - Europe West Alternative Language Forum</option> <option value='1878'> - Europe West BBB #1</option> <option value='1887'> - Europe West BBB #10</option> <option value='1888'> - Europe West BBB #11</option> <option value='1889'> - Europe West BBB #12</option> <option value='1890'> - Europe West BBB #13</option> <option value='1891'> - Europe West BBB #14</option> <option value='1892'> - Europe West BBB #15</option> <option value='1893'> - Europe West BBB #16</option> <option value='1879'> - Europe West BBB #2</option> <option value='1880'> - Europe West BBB #3</option> <option value='1881'> - Europe West BBB #4</option> <option value='1882'> - Europe West BBB #5</option> <option value='1883'> - Europe West BBB #6</option> <option value='1884'> - Europe West BBB #7</option> <option value='1885'> - Europe West BBB #8</option> <option value='1886'> - Europe West BBB #9</option> <option value='1877'> - Europe West BBB Leagues</option> <option value='57'> - Europe West Press Releases</option> <option value='51'> - Europe West Pro League</option> <option value='138'> - Fantasy Sports</option> <option value='154'> - FB Club</option> <option value='214'> - FB/TE Lv. 14 - 18</option> <option value='215'> - FB/TE Lv. 19 - 25</option> <option value='216'> - FB/TE Lv. 26+</option> <option value='212'> - FB/TE Lv. 8 and Under</option> <option value='213'> - FB/TE Lv. 9 - 13</option> <option value='131'> - Football</option> <option value='25'> - Fullbacks and Tight Ends</option> <option value='64'> - GBSN</option> <option value='63'> - Georgia Star</option> <option value='66'> - GMs/DCs/OCs</option> <option value='186'> - Goal Line Blitz Radio</option> <option value='152'> - HB Club</option> <option value='204'> - HB Lv. 14 - 18</option> <option value='205'> - HB Lv. 19 - 25</option> <option value='206'> - HB Lv. 26+</option> <option value='202'> - HB Lv. 8 and Under</option> <option value='203'> - HB Lv. 9 - 13</option> <option value='133'> - Hockey</option> <option value='161'> - K/P Club</option> <option value='229'> - K/P Lv. 14 - 18</option> <option value='230'> - K/P Lv. 19 - 25</option> <option value='231'> - K/P Lv. 26+</option> <option value='227'> - K/P Lv. 8 and Under</option> <option value='228'> - K/P Lv. 9 - 13</option> <option value='62'> - Kentucky Enquirer</option> <option value='28'> - Kickers and Punters</option> <option value='160'> - LB Club</option> <option value='239'> - LB Lv. 14 - 18</option> <option value='240'> - LB Lv. 19 - 25</option> <option value='241'> - LB Lv. 26+</option> <option value='237'> - LB Lv. 8 and Under</option> <option value='238'> - LB Lv. 9 - 13</option> <option value='30'> - Linebackers</option> <option value='3733'> - Live Issues Being Investigated</option> <option value='38'> - Looking for Cornerbacks or Safeties</option> <option value='35'> - Looking for Defensive Line</option> <option value='34'> - Looking for Fullbacks or Tight Ends</option> <option value='67'> - Looking for GMs/DCs/OCs</option> <option value='37'> - Looking for Kickers or Punters</option> <option value='39'> - Looking for Linebackers</option> <option value='36'> - Looking for Offensive Line</option> <option value='31'> - Looking for Quarterbacks</option> <option value='32'> - Looking for Running Backs</option> <option value='33'> - Looking for Wide Receivers</option> <option value='136'> - Music</option> <option value='156'> - O Line Club</option> <option value='261'> - Oceania A #1</option> <option value='262'> - Oceania A #2</option> <option value='263'> - Oceania A #3</option> <option value='264'> - Oceania A #4</option> <option value='265'> - Oceania A #5</option> <option value='266'> - Oceania A #6</option> <option value='267'> - Oceania A #7</option> <option value='268'> - Oceania A #8</option> <option value='260'> - Oceania A Leagues</option> <option value='121'> - Oceania AA #1</option> <option value='174'> - Oceania AA #2</option> <option value='175'> - Oceania AA #3</option> <option value='176'> - Oceania AA #4</option> <option value='173'> - Oceania AA Leagues</option> <option value='172'> - Oceania AAA #1</option> <option value='120'> - Oceania AAA #2</option> <option value='119'> - Oceania AAA Leagues</option> <option value='59'> - Oceania Press Releases</option> <option value='118'> - Oceania Pro League</option> <option value='27'> - Offensive Line</option> <option value='224'> - OL Lv. 14 - 18</option> <option value='225'> - OL Lv. 19 - 25</option> <option value='226'> - OL Lv. 26+</option> <option value='222'> - OL Lv. 8 and Under</option> <option value='223'> - OL Lv. 9 - 13</option> <option value='137'> - Other Sports</option> <option value='150'> - Position Talk</option> <option value='151'> - QB Club</option> <option value='199'> - QB Lv. 14 - 18</option> <option value='200'> - QB Lv. 19 - 25</option> <option value='201'> - QB Lv. 26+</option> <option value='197'> - QB Lv. 8 and Under</option> <option value='198'> - QB Lv. 9 - 13</option> <option value='22'> - Quarterbacks</option> <option value='68'> - Rate my Player</option> <option value='23'> - Running Backs</option> <option value='159'> - Safety Club</option> <option value='135'> - Soccer</option> <option value='243'> - South America A #1</option> <option value='244'> - South America A #2</option> <option value='245'> - South America A #3</option> <option value='246'> - South America A #4</option> <option value='247'> - South America A #5</option> <option value='248'> - South America A #6</option> <option value='249'> - South America A #7</option> <option value='250'> - South America A #8</option> <option value='242'> - South America A Leagues</option> <option value='125'> - South America AA #1</option> <option value='164'> - South America AA #2</option> <option value='165'> - South America AA #3</option> <option value='166'> - South America AA #4</option> <option value='124'> - South America AA Leagues</option> <option value='162'> - South America AAA #1</option> <option value='163'> - South America AAA #2</option> <option value='123'> - South America AAA Leagues</option> <option value='122'> - South America Pro League</option> <option value='60'> - South American Press Releases</option> <option value='270'> - Southeast Asia A #1</option> <option value='271'> - Southeast Asia A #2</option> <option value='272'> - Southeast Asia A #3</option> <option value='273'> - Southeast Asia A #4</option> <option value='274'> - Southeast Asia A #5</option> <option value='275'> - Southeast Asia A #6</option> <option value='276'> - Southeast Asia A #7</option> <option value='277'> - Southeast Asia A #8</option> <option value='269'> - Southeast Asia A Leagues</option> <option value='129'> - Southeast Asia AA #1</option> <option value='169'> - Southeast Asia AA #2</option> <option value='170'> - Southeast Asia AA #3</option> <option value='171'> - Southeast Asia AA #4</option> <option value='168'> - Southeast Asia AA Leagues</option> <option value='167'> - Southeast Asia AAA #1</option> <option value='128'> - Southeast Asia AAA #2</option> <option value='127'> - Southeast Asia AAA Leagues</option> <option value='126'> - Southeast Asia Pro League</option> <option value='61'> - Southeast Asian Press Releases</option> <option value='278'> - Tactics Discussion</option> <option value='155'> - TE Club</option> <option value='3734'> - Testing Information</option> <option value='69'> - toysldr0's Eastern Europe Pro Daily League Preview</option> <option value='76'> - USA A #1</option> <option value='77'> - USA A #2</option> <option value='78'> - USA A #3</option> <option value='79'> - USA A #4</option> <option value='80'> - USA A #5</option> <option value='81'> - USA A #6</option> <option value='82'> - USA A #7</option> <option value='83'> - USA A #8</option> <option value='43'> - USA A Leagues</option> <option value='72'> - USA AA #1</option> <option value='73'> - USA AA #2</option> <option value='74'> - USA AA #3</option> <option value='75'> - USA AA #4</option> <option value='42'> - USA AA Leagues</option> <option value='70'> - USA AAA #1</option> <option value='71'> - USA AAA #2</option> <option value='41'> - USA AAA Leagues</option> <option value='84'> - USA BBB #1</option> <option value='93'> - USA BBB #10</option> <option value='94'> - USA BBB #11</option> <option value='95'> - USA BBB #12</option> <option value='96'> - USA BBB #13</option> <option value='97'> - USA BBB #14</option> <option value='98'> - USA BBB #15</option> <option value='99'> - USA BBB #16</option> <option value='85'> - USA BBB #2</option> <option value='86'> - USA BBB #3</option> <option value='87'> - USA BBB #4</option> <option value='88'> - USA BBB #5</option> <option value='89'> - USA BBB #6</option> <option value='90'> - USA BBB #7</option> <option value='91'> - USA BBB #8</option> <option value='92'> - USA BBB #9</option> <option value='44'> - USA BBB Leagues</option> <option value='55'> - USA Press Releases</option> <option value='40'> - USA Pro League</option> <option value='130'> - WEPL Weekly</option> <option value='178'> - Western Europe A #1</option> <option value='179'> - Western Europe A #2</option> <option value='180'> - Western Europe A #3</option> <option value='181'> - Western Europe A #4</option> <option value='182'> - Western Europe A #5</option> <option value='183'> - Western Europe A #6</option> <option value='184'> - Western Europe A #7</option> <option value='185'> - Western Europe A #8</option> <option value='24'> - Wide Receivers</option> <option value='153'> - WR Club</option> <option value='209'> - WR Lv. 14 - 18</option> <option value='210'> - WR Lv. 19 - 25</option> <option value='211'> - WR Lv. 26+</option> <option value='207'> - WR Lv. 8 and Under</option> <option value='208'> - WR Lv. 9 - 13</option> <option value='3600'> - Books</option> <option value='3605'> - Casual A #1</option> <option value='3606'> - Casual A #2</option> <option value='3607'> - Casual A #3</option> <option value='3608'> - Casual A #4</option> <option value='3609'> - Casual A #5</option> <option value='3603'> - Casual A Leagues</option> <option value='3610'> - Casual BBB #1</option> <option value='3619'> - Casual BBB #10</option> <option value='3611'> - Casual BBB #2</option> <option value='3612'> - Casual BBB #3</option> <option value='3613'> - Casual BBB #4</option> <option value='3614'> - Casual BBB #5</option> <option value='3615'> - Casual BBB #6</option> <option value='3616'> - Casual BBB #7</option> <option value='3617'> - Casual BBB #8</option> <option value='3618'> - Casual BBB #9</option> <option value='3604'> - Casual BBB Leagues</option> <option value='3646'> - Europe East BBB #11</option> <option value='3647'> - Europe East BBB #12</option> <option value='3648'> - Europe East BBB #13</option> <option value='3649'> - Europe East BBB #14</option> <option value='3650'> - Europe East BBB #15</option> <option value='3651'> - Europe East BBB #16</option> <option value='3645'> - Gaming</option> <option value='3599'> - Movies</option> <option value='3620'> - Pee Wee League #1</option> <option value='3629'> - Pee Wee League #10</option> <option value='3630'> - Pee Wee League #11</option> <option value='3631'> - Pee Wee League #12</option> <option value='3632'> - Pee Wee League #13</option> <option value='3633'> - Pee Wee League #14</option> <option value='3634'> - Pee Wee League #15</option> <option value='3635'> - Pee Wee League #16</option> <option value='3636'> - Pee Wee League #17</option> <option value='3637'> - Pee Wee League #18</option> <option value='3638'> - Pee Wee League #19</option> <option value='3621'> - Pee Wee League #2</option> <option value='3639'> - Pee Wee League #20</option> <option value='3640'> - Pee Wee League #21</option> <option value='3641'> - Pee Wee League #22</option> <option value='3642'> - Pee Wee League #23</option> <option value='3643'> - Pee Wee League #24</option> <option value='3644'> - Pee Wee League #25</option> <option value='3622'> - Pee Wee League #3</option> <option value='3623'> - Pee Wee League #4</option> <option value='3624'> - Pee Wee League #5</option> <option value='3625'> - Pee Wee League #6</option> <option value='3626'> - Pee Wee League #7</option> <option value='3627'> - Pee Wee League #8</option> <option value='3628'> - Pee Wee League #9</option> <option value='3653'> - South America BBB #1</option> <option value='3654'> - South America BBB #2</option> <option value='3655'> - South America BBB #3</option> <option value='3656'> - South America BBB #4</option> <option value='3657'> - South America BBB #5</option> <option value='3658'> - South America BBB #6</option> <option value='3659'> - South America BBB #7</option> <option value='3660'> - South America BBB #8</option> <option value='3652'> - South America BBB Leagues</option> <option value='3598'> - Sports</option> <option value='1'>glb - Announcements</option> <option value='3'>glb - Bugs</option> <option value='19'>glb - FAQ's, Player Guides and Newbie Help</option> <option value='8'>glb - Game Recaps</option> <option value='4'>glb - Goal Line Blitz</option> <option value='2'>glb - Suggestions</option> <option value='279'>recruiting - Friendlies</option> <option value='6'>recruiting - Players Looking for Teams</option> <option value='7'>recruiting - Team Press Releases</option> <option value='10'>recruiting - Teams Looking for Players</option> <option value='20'>recruiting - Trading Block</option> <option value='140'>country - Africa</option> <option value='12'>country - Canada</option> <option value='3601'>country - Casual Leagues</option> <option value='13'>country - Europe East</option> <option value='14'>country - Europe West</option> <option value='15'>country - Oceania</option> <option value='3602'>country - Pee Wee Leagues</option> <option value='16'>country - South America</option> <option value='17'>country - Southeast Asia</option> <option value='11'>country - USA</option> <option value='5'>general - Free for All</option> <option value='3597'>general - General Discussion</option> <option value='18'>general - Introductions</option> <option value='294'>general - Private Forum Announcements</option> <option value='9'>general - Trash Talkin'</option> </select>";

var move_dropdown = document.createElement('select');
move_dropdown.innerHTML = code
move_button.appendChild(move_dropdown);
move_button.appendChild(move_textbox);
move_button.appendChild(move_input);
move_dropdown.addEventListener("change", moveBoxChange, false)