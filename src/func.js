const getAge = ( birthday ) => {
	const ageDifMs = Date.now( ) - new Date( birthday ).getTime( );
	const ageDate = new Date( ageDifMs );
	return Math.abs( ageDate.getUTCFullYear( ) - 1970 );
}
export function StringBuilder({ str, birthday }) {

	var mapString = {
		_getAge: getAge( birthday ),
		// _dog: "DOG", _goat: "GOat"
	};
	return str.replace( /_getAge/g, function ( matched ) {
		return mapString[matched];
	});
}