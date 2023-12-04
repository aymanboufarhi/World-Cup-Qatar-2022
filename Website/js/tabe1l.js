// Fonction pour modifier les rangee du tableau.
function edit_row(i)
{
 document.getElementById("edit_button"+i).style.display="none";
 document.getElementById("save_button"+i).style.display="block";
	
 var name=document.getElementById("name_row"+i);
 var country=document.getElementById("country_row"+i);
 var age=document.getElementById("age_row"+i);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+i+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+i+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+i+"' value='"+age_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function save_row(i)
{
 var name_val=document.getElementById("name_text"+i).value;
 var country_val=document.getElementById("country_text"+i).value;
 var age_val=document.getElementById("age_text"+i).value;

 document.getElementById("name_row"+i).innerHTML=name_val;
 document.getElementById("country_row"+i).innerHTML=country_val;
 document.getElementById("age_row"+i).innerHTML=age_val;

 document.getElementById("edit_button"+i).style.display="block";
 document.getElementById("save_button"+i).style.display="none";
}
// Fonction pour Supprimer un rangee.
function delete_row(i)
{
 document.getElementById("row"+i+"").outerHTML="";
}

// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).
function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='flag'> <img id='flag'src='./images/95.gif'> </td> <td id='natio'>Marocain</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}