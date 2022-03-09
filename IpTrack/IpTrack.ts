var XMLHttpRequest = require( "xmlhttprequest" ).XMLHttpRequest;

export class IpTrack {
	private readonly POST: string = 'POST';
	private readonly baseUrl: string = 'http://api.ipstack.com/';
	private readonly accessKey: string = '?access_key=28ce2aa6bfab1c4eea58014bb7ba15b8';
	protected myIP: string = '111.235.250.169';
	protected request: XMLHttpRequest = new XMLHttpRequest;

	public sentApi (): void {
		this.request.open( this.POST, this.baseUrl + this.myIP + this.accessKey );
		this.request.onreadystatechange = function (): void {
			if ( this.readyState === 4 && this.status === 200 ) {

				const responseJSON = JSON.parse( this.responseText );
				const myResponse: IResponse = {
					ip: responseJSON.ip,
					hostname: responseJSON.hostname,
					type: responseJSON.type,
					continent_code: responseJSON.continent_code,
					continent_name: responseJSON.continent_name,
					country_code: responseJSON.country_code,
					country_name: responseJSON.country_name,
					region_code: responseJSON.region_code,
					region_name: responseJSON.region_name,
					city: responseJSON.city,
					zip: responseJSON.zip,
					latitude: responseJSON.latitude,
					longitude: responseJSON.longitude
				}
				console.log( myResponse );
			}
		}
		this.request.send();
	}
}

let start = new IpTrack();
start.sentApi();

export interface IResponse {
	ip: string;
	hostname: string;
	type: string;
	continent_code: string;
	continent_name: string;
	country_code: string;
	country_name: string;
	region_code: string;
	region_name: string;
	city: string;
	zip: string;
	latitude: number;
	longitude: number;
}

