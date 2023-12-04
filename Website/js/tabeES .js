// Fonction pour modifier les rangee du tableau.
function edit_row(i)
{
 document.getElementById("edit_buttons"+i).style.display="none";
 document.getElementById("save_buttons"+i).style.display="block";
	
 var name=document.getElementById("name_rang"+i);
 var position=document.getElementById("position_rang"+i);
 var age=document.getElementById("age_rang"+i);
	
 var name_data=name.innerHTML;
 var position_data=position.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+i+"' value='"+name_data+"'>";
 position.innerHTML="<input type='text' id='position_text"+i+"' value='"+position_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+i+"' value='"+age_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function save_row(i)
{
 var name_val=document.getElementById("name_text"+i).value;
 var country_val=document.getElementById("position_text"+i).value;
 var age_val=document.getElementById("age_text"+i).value;

 document.getElementById("name_rang"+i).innerHTML=name_val;
 document.getElementById("position_rang"+i).innerHTML=country_val;
 document.getElementById("age_rang"+i).innerHTML=age_val;

 document.getElementById("edit_buttons"+i).style.display="block";
 document.getElementById("save_buttons"+i).style.display="none";
}
// Fonction pour Supprimer un rangee.
function delete_row(i)
{
 document.getElementById("rang"+i+"").outerHTML="";
}

// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).
function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_position=document.getElementById("new_position").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("espagne_table");
 var table_len=(table.rows.length)-1;
 var rang = table.insertRow(table_len).outerHTML="<tr id='rang"+table_len+"'><td id='name_rang"+table_len+"'>"+new_name+"</td><td id='drap'> <img id='drap'src='./images/ES.webp'> </td> <td id='nationalite'>Espagne</td><td id='position_rang"+table_len+"'>"+new_position+"</td><td id='age_rang"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_buttons"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_buttons"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_position").value="";
 document.getElementById("new_age").value="";
}