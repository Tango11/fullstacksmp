import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {TerceraPage} from '../pages/tercera/tercera';
import { Observable } from 'rxjs-compat';
@Injectable()
export class LugaresService{

	constructor ( public afDB: AngularFireDatabase){
		
	}
	public getLugares(){
		

	 
	return this.afDB.list('/lugares/').valueChanges();

	

	}

	

	public getLugar(id){
	return this.afDB.object('/lugares/'+id);
	}
	public createLugar(lugar){
	return this.afDB.database.ref('/lugares/'+lugar.id).set(lugar);
	}
	public editLugar(lugar){
	return this.afDB.database.ref('/lugares/'+lugar.id).set(lugar);
	}
	public deleteLugar(lugar){
       return this.afDB.database.ref('/lugares/'+ lugar.id).remove();
	}
}