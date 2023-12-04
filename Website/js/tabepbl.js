// Fonction pour modifier les rangee du tableau.
function modifier_rangee(i)
{
 document.getElementById("edit_buttonb"+i).style.display="none";
 document.getElementById("save_buttonb"+i).style.display="block";
	
 var nom=document.getElementById("name_rangee"+i);
 var position=document.getElementById("pos_rangee"+i);
 var age=document.getElementById("age_rangee"+i);
	
 var nom_data=nom.innerHTML;
 var pos_data=position.innerHTML;
 var age_data=age.innerHTML;
	
 nom.innerHTML="<input type='text' id='nom_text"+i+"' value='"+nom_data+"'>";
 position.innerHTML="<input type='text' id='pos_text"+i+"' value='"+pos_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+i+"' value='"+age_data+"'>";
}
// Fonction sauver permet de sauvgarder les modification.
function sauvgarder_rangee(i)
{
 var nom_val=document.getElementById("nom_text"+i).value;
 var pos_val=document.getElementById("pos_text"+i).value;
 var age_val=document.getElementById("age_text"+i).value;

 document.getElementById("name_rangee"+i).innerHTML=nom_val;
 document.getElementById("pos_rangee"+i).innerHTML=pos_val;
 document.getElementById("age_rangee"+i).innerHTML=age_val;

 document.getElementById("edit_buttonb"+i).style.display="block";
 document.getElementById("save_buttonb"+i).style.display="none";
}
// Fonction pour Supprimer un rangee.
function supprimer_rangee(i)
{
 document.getElementById("rangee"+i+"").outerHTML="";
}

// Fonction pour ajouter un nouveau rangee avec les buttons (modifier,sauvgarder et suppprimer).
function ajouter_rangee()
{
 var nouv_nom=document.getElementById("nouv_nom").value;
 var nouv_pos=document.getElementById("nouv_pos").value;
 var nouv_age=document.getElementById("nouv_age").value;
	
 var table=document.getElementById("tabel_paysbas");
 var table_len=(table.rows.length)-1;
 var rangee = table.insertRow(table_len).outerHTML="<tr id='rangee"+table_len+"'><td id='nom_rangee"+table_len+"'>"+nouv_nom+"</td><td id='drap'> <img id='drap'src='./images/pb.webp'> </td> <td id='natio'>Pays-bas</td><td id='pos_rangee"+table_len+"'>"+nouv_pos+"</td><td id='age_rangee"+table_len+"'>"+nouv_age+"</td><td><input type='button' id='edit_buttonb"+table_len+"' value='Edit' class='edit' onclick='modifier_rangee("+table_len+")'> <input type='button' id='save_buttonb"+table_len+"' value='Save' class='save' onclick='sauvgarder_rangee("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='supprimer_rangee("+table_len+")'></td></tr>";

 document.getElementById("nouv_nom").value="";4
 document.getElementById("nouv_pos").value="";
 document.getElementById("nouv_age").value="";
}
