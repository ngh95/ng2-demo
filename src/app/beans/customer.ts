export interface Customer {
  cli_id?: number;
  societe_id?: number;
  cli_date_creation?: string;
  cli_societe?: string;
  cli_nom?: string;
  cli_prenom?: string;
  cli_adresse1?: string;
  cli_adresse2?: string;
  cli_ville?: string;
  cli_cp?: string;
  cli_tel?: string;
  cli_mobile?: string;
  cli_email?: string;
  cli_texte?:string 
}
