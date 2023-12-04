// Fonction pour modifier les rangee du tableau.
function edit_rowu(u)
{
 document.getElementById("edit_buttonu"+u).style.display="none";
 document.getElementById("save_buttonu"+u).style.display="block";
	
 var uname=document.getElementById("name_rowu"+u);
 var uposition=document.getElementById("u-position-row"+u);
 var uage=document.getElementById("u-age_row"+u);
	
 var uname_data=uname.innerHTML;
 var uposition_data=uposition.innerHTML;
 var uage_data=uage.innerHTML;
	
 uname.innerHTML="<input type='text' id='uname_text"+u+"' value='"+uname_data+"'>";
 uposition.innerHTML="<input type='text' id='uposition_text"+u+"' value='"+uposition_data+"'>";
 uage.innerHTML="<input type='text' id='uage_text"+u+"' value='"+uage_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function save_rowu(u)
{
 var uname_val=document.getElementById("uname_text"+u).value;
 var uposition_val=document.getElementById("uposition_text"+u).value;
 var uage_val=document.getElementById("uage_text"+u).value;

 document.getElementById("name_rowu"+u).innerHTML=uname_val;
 document.getElementById("u-position-row"+u).innerHTML=uposition_val;
 document.getElementById("u-age_row"+u).innerHTML=uage_val;

 document.getElementById("edit_buttonu"+u).style.display="block";
 document.getElementById("save_buttonu"+u).style.display="none";
}
// Fonction pour Supprimer un rangee.
function delete_rowu(u)
{
 document.getElementById("urow"+u+"").outerHTML="";
}
// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).

function add_rowu()
{
 var new_uname=document.getElementById("new_uname").value;
 var new_uposition=document.getElementById("new_uposition").value;
 var new_uage=document.getElementById("new_uage").value;
	
 var table=document.getElementById("uk_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='urow"+table_len+"'><td id='name_rowu"+table_len+"'>"+new_uname+"</td><td id='u-flag'> <img id='u-flag'src='./images/uk2.png'> </td> <td id='u-natio'>Britannique</td><td id='u-position-row"+table_len+"'>"+new_uposition+"</td><td id='u-age_row"+table_len+"'>"+new_uage+"</td><td><input type='button' id='edit_buttonu"+table_len+"' value='Edit' class='edit' onclick='edit_rowu("+table_len+")'> <input type='button' id='save_buttonu"+table_len+"' value='Save' class='save' onclick='save_rowu("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_rowu("+table_len+")'></td></tr>";

 document.getElementById("new_uname").value="";
 document.getElementById("new_uposition").value="";
 document.getElementById("new_uage").value="";
}

                  