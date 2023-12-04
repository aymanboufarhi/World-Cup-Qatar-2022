// Fonction pour modifier les rangee du tableau.
function edit_rowf(f)
{
 document.getElementById("edit_buttonf"+f).style.display="none";
 document.getElementById("save_buttonf"+f).style.display="block";
	
 var fname=document.getElementById("f-name_row"+f);
 var fposition=document.getElementById("f-position-row"+f);
 var fage=document.getElementById("f-age_row"+f);
	
 var fname_data=fname.innerHTML;
 var fposition_data=fposition.innerHTML;
 var fage_data=fage.innerHTML;
	
 fname.innerHTML="<input type='text' id='fname_text"+f+"' value='"+fname_data+"'>";
 fposition.innerHTML="<input type='text' id='fposition_text"+f+"' value='"+fposition_data+"'>";
 fage.innerHTML="<input type='text' id='fage_text"+f+"' value='"+fage_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function save_rowf(f)
{
 var fname_val=document.getElementById("fname_text"+f).value;
 var fposition_val=document.getElementById("fposition_text"+f).value;
 var fage_val=document.getElementById("fage_text"+f).value;

 document.getElementById("f-name_row"+f).innerHTML=fname_val;
 document.getElementById("f-position-row"+f).innerHTML=fposition_val;
 document.getElementById("f-age_row"+f).innerHTML=fage_val;

 document.getElementById("edit_buttonf"+f).style.display="block";
 document.getElementById("save_buttonf"+f).style.display="none";
}
// Fonction pour Supprimer un rangee.
function delete_rowf(f)
{
 document.getElementById("frow"+f+"").outerHTML="";
}

// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).
function add_rowf()
{
 var new_fname=document.getElementById("new_fname").value;
 var new_fposition=document.getElementById("new_fposition").value;
 var new_fage=document.getElementById("new_fage").value;
	
 var table=document.getElementById("frc_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='frow"+table_len+"'><td id='f-name_row"+table_len+"'>"+new_fname+"</td><td id='f-flag'> <img id='f-flag'src='./images/france.png'> </td> <td id='f-natio'>Français</td><td id='f-position-row"+table_len+"'>"+new_fposition+"</td><td id='f-age_row"+table_len+"'>"+new_fage+"</td><td><input type='button' id='edit_buttonf"+table_len+"' value='Edit' class='edit' onclick='edit_rowf("+table_len+")'> <input type='button' id='save_buttonf"+table_len+"' value='Save' class='save' onclick='save_rowf("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_rowf("+table_len+")'></td></tr>";

 document.getElementById("new_fname").value="";
 document.getElementById("new_fposition").value="";
 document.getElementById("new_fage").value="";
}

                  