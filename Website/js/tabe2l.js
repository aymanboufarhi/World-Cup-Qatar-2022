// Fonction pour modifier les rangee du tableau.
function edit_rowp(no)
{
 document.getElementById("edit_buttonp"+no).style.display="none";
 document.getElementById("save_buttonp"+no).style.display="block";
	
 var pname=document.getElementById("p-name_row"+no);
 var pposition=document.getElementById("pos-position_row"+no);
 var page=document.getElementById("p-age_row"+no);
	
 var pname_data=pname.innerHTML;
 var pposition_data=pposition.innerHTML;
 var page_data=page.innerHTML;
	
 pname.innerHTML="<input type='text' id='pname_text"+no+"' value='"+pname_data+"'>";
 pposition.innerHTML="<input type='text' id='pposition_text"+no+"' value='"+pposition_data+"'>";
 page.innerHTML="<input type='text' id='page_text"+no+"' value='"+page_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function save_rowp(no)
{
 var pname_val=document.getElementById("pname_text"+no).value;
 var pposition_val=document.getElementById("pposition_text"+no).value;
 var page_val=document.getElementById("page_text"+no).value;

 document.getElementById("p-name_row"+no).innerHTML=pname_val;
 document.getElementById("pos-position_row"+no).innerHTML=pposition_val;
 document.getElementById("p-age_row"+no).innerHTML=page_val;

 document.getElementById("edit_buttonp"+no).style.display="block";
 document.getElementById("save_buttonp"+no).style.display="none";
}
// Fonction pour Supprimer un rangee.
function delete_rowp(no)
{
 document.getElementById("prow"+no+"").outerHTML="";
}

// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).
function add_rowp()
{
 var new_pname=document.getElementById("new_pname").value;
 var new_pposition=document.getElementById("new_pposition").value;
 var new_page=document.getElementById("new_page").value;
	
 var table=document.getElementById("tabel_portugal");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='prow"+table_len+"'><td id='p-name_row"+table_len+"'>"+new_pname+"</td><td id='p-flag'> <img id='p-flag'src='./images/R.gif'> </td> <td id='p-natio'>Portugais</td><td id='pos-position_row"+table_len+"'>"+new_pposition+"</td><td id='p-age_row"+table_len+"'>"+new_page+"</td><td><input type='button' id='edit_buttonp"+table_len+"' value='Edit' class='edit' onclick='edit_rowp("+table_len+")'> <input type='button' id='save_buttonp"+table_len+"' value='Save' class='save' onclick='save_rowp("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_rowp("+table_len+")'></td></tr>";

 document.getElementById("new_pname").value="";
 document.getElementById("new_pposition").value="";
 document.getElementById("new_page").value="";
}

                  