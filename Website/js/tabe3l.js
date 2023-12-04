// Fonction pour modifier les rangee du tableau.
function edit_rowb(j)
{
 document.getElementById("edit_buttonb"+j).style.display="none";
 document.getElementById("save_buttonb"+j).style.display="block";
	
 var bname=document.getElementById("b-name_row"+j);
 var bposition=document.getElementById("b-position-row"+j);
 var page=document.getElementById("b-age_row"+j);
	
 var bname_data=bname.innerHTML;
 var bposition_data=bposition.innerHTML;
 var bage_data=page.innerHTML;
	
 bname.innerHTML="<input type='text' id='bname_text"+j+"' value='"+bname_data+"'>";
 bposition.innerHTML="<input type='text' id='bposition_text"+j+"' value='"+bposition_data+"'>";
 page.innerHTML="<input type='text' id='page_text"+j+"' value='"+bage_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function save_rowb(j)
{
 var bname_val=document.getElementById("bname_text"+j).value;
 var bposition_val=document.getElementById("bposition_text"+j).value;
 var bage_val=document.getElementById("page_text"+j).value;

 document.getElementById("b-name_row"+j).innerHTML=bname_val;
 document.getElementById("b-position-row"+j).innerHTML=bposition_val;
 document.getElementById("b-age_row"+j).innerHTML=bage_val;

 document.getElementById("edit_buttonb"+j).style.display="block";
 document.getElementById("save_buttonb"+j).style.display="none";
}
// Fonction pour Supprimer un rangee.
function delete_rowb(j)
{
 document.getElementById("brow"+j+"").outerHTML="";
}

// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).
function add_rowb()
{
 var new_bname=document.getElementById("new_bname").value;
 var new_bposition=document.getElementById("new_bposition").value;
 var new_page=document.getElementById("new_bage").value;
	
 var table=document.getElementById("brz_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='brow"+table_len+"'><td id='b-name_row"+table_len+"'>"+new_bname+"</td><td id='b-flag'> <img id='b-flag'src='./images/brazil.png'> </td> <td id='b-natio'>Brésilien</td><td id='b-position-row"+table_len+"'>"+new_bposition+"</td><td id='b-age_row"+table_len+"'>"+new_page+"</td><td><input type='button' id='edit_buttonb"+table_len+"' value='Edit' class='edit' onclick='edit_rowb("+table_len+")'> <input type='button' id='save_buttonb"+table_len+"' value='Save' class='save' onclick='save_rowb("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_rowb("+table_len+")'></td></tr>";

 document.getElementById("new_bname").value="";
 document.getElementById("new_bposition").value="";
 document.getElementById("new_bage").value="";
}

                  