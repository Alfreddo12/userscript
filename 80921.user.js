// ==UserScript==
// @name           NetDisaster Loader (Google Chrome)
// @namespace      Techjar
// @description    Adds a small link to load NetDisaster anywhere.
// @version        1.0.0
// @include        *
// ==/UserScript==

var GBI = document.getElementById;


var ls = document.createElement('script');
ls.innerHTML = 'function nd_load(){document.getElementById(\'nd_loader\').style.display=\'none\';if(document.getElementById(\'nd_script\'))document.getElementById(\'nd_script\').parentNode.removeChild(document.getElementById(\'nd_script\'));if(document.getElementById(\'nd_prefs\'))document.getElementById(\'nd_prefs\').parentNode.removeChild(document.getElementById(\'nd_prefs\'));if(document.getElementById(\'nd_myAnim\'))document.getElementById(\'nd_myAnim\').parentNode.removeChild(document.getElementById(\'nd_myAnim\'));var sc1=document.createElement(\'script\');var sc2=document.createElement(\'script\');loader=document.getElementById(\'nd_loader\').contentWindow;sc1.innerHTML=\'nd_mode=\"\'+loader.document.getElementById(\'ndpref_mode\').value+\'\";nd_dest=\"\'+loader.document.getElementById(\'ndpref_dest\').value+\'\";nd_control=\"\'+loader.document.getElementById(\'ndpref_control\').value+\'\";nd_sound=\"\'+loader.document.getElementById(\'ndpref_sound\').value+\'\";nd_vAlign=\"bottom\";nd_hAlign=\"right\";nd_vMargin=\"10\";nd_hMargin=\"10\";nd_target=\"_top\";\';sc2.src=\'http://www.netdisaster.com/js/mynd.js\';sc1.id=\'nd_prefs\';sc2.id=\'nd_script\';document.body.appendChild(sc1);document.body.appendChild(sc2);nd_fix_anim()}';
ls.innerHTML = ls.innerHTML+'function nd_fix_anim(){if(document.getElementById(\'nd_myAnim\')){document.getElementById(\'nd_myAnim\').style.position=\'fixed\';document.getElementById(\'nd_myAnim\').style.zIndex=\'500000\'}else{setTimeout(\"nd_fix_anim();\",200)}}';
ls.id = 'loader_script';
document.body.appendChild(ls);

var ndl = document.createElement('iframe');
ndl.src = 'javascript:"<script type=\\\"text/javascript\\\">function nd_modechange(mode){var nd_able=new Array();nd_able[\\\"control\\\"]=new Array();nd_able[\\\"destruction\\\"]=new Array();nd_able[\\\"sound\\\"]=new Array();nd_able[\\\"control\\\"][\\\"meteor\\\"]=true;nd_able[\\\"control\\\"][\\\"bomb\\\"]=true;nd_able[\\\"control\\\"][\\\"eggs\\\"]=true;nd_able[\\\"control\\\"][\\\"dino\\\"]=true;nd_able[\\\"control\\\"][\\\"coffee\\\"]=true;nd_able[\\\"control\\\"][\\\"worms\\\"]=true;nd_able[\\\"control\\\"][\\\"burn\\\"]=true;nd_able[\\\"control\\\"][\\\"mold\\\"]=true;nd_able[\\\"control\\\"][\\\"flowers\\\"]=true;nd_able[\\\"control\\\"][\\\"wasp\\\"]=true;nd_able[\\\"control\\\"][\\\"dog\\\"]=true;nd_able[\\\"control\\\"][\\\"cow\\\"]=true;nd_able[\\\"control\\\"][\\\"tomato\\\"]=true;nd_able[\\\"control\\\"][\\\"baby\\\"]=true;nd_able[\\\"control\\\"][\\\"fly\\\"]=true;nd_able[\\\"control\\\"][\\\"pee\\\"]=true;nd_able[\\\"control\\\"][\\\"acid\\\"]=true;nd_able[\\\"control\\\"][\\\"vomit\\\"]=true;nd_able[\\\"control\\\"][\\\"creampie\\\"]=true;nd_able[\\\"control\\\"][\\\"ufo\\\"]=true;nd_able[\\\"control\\\"][\\\"zeppelin\\\"]=true;nd_able[\\\"control\\\"][\\\"ants\\\"]=true;nd_able[\\\"destruction\\\"][\\\"meteor\\\"]=true;nd_able[\\\"destruction\\\"][\\\"bomb\\\"]=true;nd_able[\\\"destruction\\\"][\\\"ufo\\\"]=true;nd_able[\\\"destruction\\\"][\\\"wasp\\\"]=true;nd_able[\\\"destruction\\\"][\\\"tomato\\\"]=true;nd_able[\\\"destruction\\\"][\\\"chainsaw\\\"]=true;nd_able[\\\"destruction\\\"][\\\"acid\\\"]=true;nd_able[\\\"destruction\\\"][\\\"creampie\\\"]=true;nd_able[\\\"destruction\\\"][\\\"zeppelin\\\"]=true;nd_able[\\\"sound\\\"][\\\"meteor\\\"]=true;nd_able[\\\"sound\\\"][\\\"bomb\\\"]=true;nd_able[\\\"sound\\\"][\\\"dino\\\"]=true;nd_able[\\\"sound\\\"][\\\"gun\\\"]=true;nd_able[\\\"sound\\\"][\\\"blood\\\"]=true;nd_able[\\\"sound\\\"][\\\"paint\\\"]=true;nd_able[\\\"sound\\\"][\\\"manif\\\"]=true;nd_able[\\\"sound\\\"][\\\"graff\\\"]=true;nd_able[\\\"sound\\\"][\\\"ufo\\\"]=true;nd_able[\\\"sound\\\"][\\\"zeppelin\\\"]=true;if(nd_able[\\\'control\\\'][mode]){document.getElementById(\\\'ndpref_control_title\\\').style.color=\\\'#ffcc66\\\';document.getElementById(\\\'ndpref_control\\\').style.display=\\\'\\\'}else{document.getElementById(\\\'ndpref_control_title\\\').style.color=\\\'#8888bb\\\';document.getElementById(\\\'ndpref_control\\\').style.display=\\\'none\\\'}if(nd_able[\\\'destruction\\\'][mode]){document.getElementById(\\\'ndpref_dest_title\\\').style.color=\\\'#ffcc66\\\';document.getElementById(\\\'ndpref_dest\\\').style.display=\\\'\\\'}else{document.getElementById(\\\'ndpref_dest_title\\\').style.color=\\\'#8888bb\\\';document.getElementById(\\\'ndpref_dest\\\').style.display=\\\'none\\\'}if(nd_able[\\\'sound\\\'][mode]){document.getElementById(\\\'ndpref_sound_title\\\').style.color=\\\'#ffcc66\\\';document.getElementById(\\\'ndpref_sound\\\').style.display=\\\'\\\'}else{document.getElementById(\\\'ndpref_sound_title\\\').style.color=\\\'#8888bb\\\';document.getElementById(\\\'ndpref_sound\\\').style.display=\\\'none\\\'}}</script><style type=\\\"text/css\\\">body{margin:0;padding:0;font-family:\\\'Times New Roman\\\',Times,serif;}</style><table border=\\\"0\\\" align=\\\"center\\\" cellpadding=\\\"4\\\" cellspacing=\\\"0\\\" style=\\\"width:100%;\\\"><tr><td align=\\\"right\\\" id=\\\"ndpref_mode_title\\\" style=\\\"font-weight:bold; color:#ffcc66;\\\">Disaster</td><td><select id=\\\"ndpref_mode\\\" name=\\\"selectmode\\\" onchange=\\\"nd_modechange(this.value);\\\"><optgroup label=\\\"Nature\\\"><option value=\\\"meteor\\\">Meteors</option><option value=\\\"flood\\\">Flood</option><option value=\\\"flowers\\\">Flower Power</option></optgroup><optgroup label=\\\"Technology\\\"><option value=\\\"bomb\\\">Nuke</option><option value=\\\"ufo\\\">Mars Attacks!</option><option value=\\\"graff\\\">Graffiti</option><option value=\\\"shaver\\\">Screenshaver</option><option value=\\\"gun\\\">Gun</option><option value=\\\"blood\\\">Bloody Gun</option><option value=\\\"paint\\\">PaintBall</option><option value=\\\"chainsaw\\\">Chainsaw</option></optgroup><optgroup label=\\\"Life Forms\\\"><option value=\\\"dino\\\">Dinosaurs</option><option value=\\\"wasp\\\">Wasps</option><option value=\\\"fly\\\">Flies</option><option value=\\\"ants\\\">Ants</option><option value=\\\"snail\\\">Snail</option><option value=\\\"worms\\\">Worms</option><option value=\\\"mold\\\">Mold</option></optgroup><optgroup label=\\\"Home, Office\\\"><option value=\\\"baby\\\">Scribbling baby</option><option value=\\\"eggs\\\">Fried Eggs</option><option value=\\\"coffee\\\">Spilled Coffee</option><option value=\\\"burn\\\">Slow Burn</option><option value=\\\"tomato\\\">Tomatoes</option><option value=\\\"creampie\\\">Cream Pie</option></optgroup><optgroup label=\\\"Miscellaneous\\\"><option value=\\\"manif\\\">Demonstration</option><option value=\\\"god\\\">God Almighty</option></optgroup><optgroup label=\\\"Dirty\\\"><option value=\\\"cow\\\">Cow Dung</option><option value=\\\"dog\\\">Dog Poop</option><option value=\\\"pee\\\">Pee</option><option value=\\\"acid\\\">Acid Pee</option><option value=\\\"vomit\\\">Vomit (yuk!)</option></optgroup></select></td></tr><tr><td align=\\\"right\\\" id=\\\"ndpref_dest_title\\\" style=\\\"font-weight:bold; color:#ffcc66;\\\">Destruction</td><td><select id=\\\"ndpref_dest\\\" name=\\\"selectdestruction\\\"><option value=\\\"\\\">self-repair</option><option value=\\\"massive\\\">massive</option></select></td></tr><tr><td align=\\\"right\\\" id=\\\"ndpref_control_title\\\" style=\\\"font-weight:bold; color:#ffcc66;\\\">Control</td><td><select id=\\\"ndpref_control\\\" name=\\\"selectcontrol\\\"><option value=\\\"\\\">auto</option><option value=\\\"on\\\">mouse</option></select></td></tr><tr><td align=\\\"right\\\" id=\\\"ndpref_sound_title\\\" style=\\\"font-weight:bold; color:#ffcc66;\\\">Sound</td><td><select id=\\\"ndpref_sound\\\" name=\\\"selectsound\\\"><option value=\\\"\\\">mute</option><option value=\\\"on\\\">on</option></select></td></tr><tr><td colspan=\\\"2\\\" align=\\\"center\\\"><input type=\\\"button\\\" value=\\\"Load NetDisaster\\\" onclick=\\\"parent.nd_load();\\\" /> <input type=\\\"button\\\" value=\\\"Close\\\" onclick=\\\"parent.document.getElementById(\\\'nd_loader\\\').style.display = \\\'none\\\';\\\" /></td></tr></table>"';
ndl.id = 'nd_loader';
ndl.style.position = 'fixed';
ndl.style.bottom = '0';
ndl.style.right = '0';
ndl.style.zIndex = '2000000';
ndl.style.width = '245px';
ndl.style.height = '160px';
ndl.style.backgroundColor = '#440000';
ndl.style.border = '0';
ndl.style.display = 'none';
document.body.appendChild(ndl);

var ndb = document.createElement('div');
ndb.innerHTML = '<a href="#" onclick="document.getElementById(\'nd_loader\').style.display=\'block\'; return false;">Load NetDisaster</a>';
ndb.id = 'nd_button';
ndb.style.position = 'fixed';
ndb.style.bottom = '2px';
ndb.style.right = '2px';
ndb.style.zIndex = '1000000';
document.body.appendChild(ndb);