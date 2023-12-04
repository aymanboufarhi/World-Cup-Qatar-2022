// Fonction pour modifier les rangee du tableau.
function edit_rowa(a)
{
 document.getElementById("edit_buttona"+a).style.display="none";
 document.getElementById("save_buttona"+a).style.display="block";
	
 var aname=document.getElementById("a-name_row"+a);
 var aposition=document.getElementById("a-position-row"+a);
 var aage=document.getElementById("a-age_row"+a);
	
 var aname_data=aname.innerHTML;
 var aposition_data=aposition.innerHTML;
 var aage_data=aage.innerHTML;
	
 aname.innerHTML="<input type='text' id='aname_text"+a+"' value='"+aname_data+"'>";
 aposition.innerHTML="<input type='text' id='aposition_text"+a+"' value='"+aposition_data+"'>";
 aage.innerHTML="<input type='text' id='aage_text"+a+"' value='"+aage_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function save_rowa(a)
{
 var aname_val=document.getElementById("aname_text"+a).value;
 var aposition_val=document.getElementById("aposition_text"+a).value;
 var aage_val=document.getElementById("aage_text"+a).value;

 document.getElementById("a-name_row"+a).innerHTML=aname_val;
 document.getElementById("a-position-row"+a).innerHTML=aposition_val;
 document.getElementById("a-age_row"+a).innerHTML=aage_val;

 document.getElementById("edit_buttona"+a).style.display="block";
 document.getElementById("save_buttona"+a).style.display="none";
}
// Fonction pour Supprimer un rangee.
function delete_rowa(a)
{
 document.getElementById("arow"+a+"").outerHTML="";
}

// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).
function add_rowa()
{
 var new_aname=document.getElementById("new_aname").value;
 var new_aposition=document.getElementById("new_aposition").value;
 var new_aage=document.getElementById("new_aage").value;
	
 var table=document.getElementById("arg_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='arow"+table_len+"'><td id='a-name_row"+table_len+"'>"+new_aname+"</td><td id='a-flag'> <img id='a-flag'src='./images/argentina.png'> </td> <td id='a-natio'>Argentin</td><td id='a-position-row"+table_len+"'>"+new_aposition+"</td><td id='a-age_row"+table_len+"'>"+new_aage+"</td><td><input type='button' id='edit_buttona"+table_len+"' value='Edit' class='edit' onclick='edit_rowa("+table_len+")'> <input type='button' id='save_buttona"+table_len+"' value='Save' class='save' onclick='save_rowa("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_rowa("+table_len+")'></td></tr>";

 document.getElementById("new_aname").value="";
 document.getElementById("new_aposition").value="";
 document.getElementById("new_aage").value="";
}

                  