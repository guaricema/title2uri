export default ({ filter, action }) => {
	// tranliterate string from cyrillic 
	// to latin (for example: абв -> abv)
	var transliterate = function(text) {
		text = text
		.replace(/\u0410/g, 'A')
		.replace(/\u0430/g, 'a')
		.replace(/\u0411/g, 'B')
		.replace(/\u0431/g, 'b')
		.replace(/\u0412/g, 'V')
		.replace(/\u0432/g, 'v')
		.replace(/\u0413/g, 'G')
		.replace(/\u0433/g, 'g')
		.replace(/\u0414/g, 'D')
		.replace(/\u0434/g, 'd')
		.replace(/\u0415/g, 'E')
		.replace(/\u0435/g, 'e')
		.replace(/\u0401/g, 'YO')
		.replace(/\u0451/g, 'yo')
		.replace(/\u0416/g, 'ZH')
		.replace(/\u0436/g, 'zh')
		.replace(/\u0417/g, 'Z')
		.replace(/\u0437/g, 'z')
		.replace(/\u0418/g, 'I')
		.replace(/\u0438/g, 'i')
		.replace(/\u0419/g, 'I')
		.replace(/\u0439/g, 'i')
		.replace(/\u041A/g, 'K')
		.replace(/\u043A/g, 'k')
		.replace(/\u041B/g, 'L')
		.replace(/\u043B/g, 'l')
		.replace(/\u041C/g, 'M')
		.replace(/\u043C/g, 'm')
		.replace(/\u041D/g, 'N')
		.replace(/\u043D/g, 'n')
		.replace(/\u041E/g, 'O')
		.replace(/\u043E/g, 'o')
		.replace(/\u041F/g, 'P')
		.replace(/\u043F/g, 'p')
		.replace(/\u0420/g, 'R')
		.replace(/\u0440/g, 'r')
		.replace(/\u0421/g, 'S')
		.replace(/\u0441/g, 's')
		.replace(/\u0422/g, 'T')
		.replace(/\u0442/g, 't')
		.replace(/\u0423/g, 'U')
		.replace(/\u0443/g, 'u')
		.replace(/\u0424/g, 'F')
		.replace(/\u0444/g, 'f')
		.replace(/\u0425/g, 'H')
		.replace(/\u0445/g, 'h')
		.replace(/\u0426/g, 'TS')
		.replace(/\u0446/g, 'ts')
		.replace(/\u0427/g, 'CH')
		.replace(/\u0447/g, 'ch')
		.replace(/\u0428/g, 'SH')
		.replace(/\u0448/g, 'sh')
		.replace(/\u0429/g, 'SCH')
		.replace(/\u0449/g, 'sch')
		.replace(/\u042A/g, '')
		.replace(/\u044A/g, '')
		.replace(/\u042B/g, 'Y')
		.replace(/\u044B/g, 'y')
		.replace(/\u042C/g, '')
		.replace(/\u044C/g, '')
		.replace(/\u042D/g, 'E')
		.replace(/\u044D/g, 'e')
		.replace(/\u042E/g, 'YU')
		.replace(/\u044E/g, 'yu')
		.replace(/\u042F/g, 'Ya')
		.replace(/\u044F/g, 'ya')
		// kazakh language
		.replace(/\u04D8/g, 'A')
		.replace(/\u04D9/g, 'a')
		.replace(/\u0492/g, 'G')
		.replace(/\u0493/g, 'g')
		.replace(/\u049A/g, 'Q')
		.replace(/\u049B/g, 'q')
		.replace(/\u04A2/g, 'N')
		.replace(/\u04A3/g, 'n')
		.replace(/\u04E8/g, 'O')
		.replace(/\u04E9/g, 'o')
		.replace(/\u04B0/g, 'U')
		.replace(/\u04B1/g, 'u')
		.replace(/\u04AE/g, 'Y')
		.replace(/\u04AF/g, 'y')
		.replace(/\u04BA/g, 'H')
		.replace(/\u04BB/g, 'h')
		.replace(/\u0406/g, 'I')
		.replace(/\u0456/g, 'i');
	
		return text;
	};

	filter('items.create', (input) => {
		// check the fields
		const title = 'article_title' in input;
		
		if(title) {
			// cyrrilic to latin
			const title_latin = transliterate(input.article_title);

			// convert title to slug
			input.article_uri = title_latin.toLowerCase().replace(/\W{1}/g, '-');

			// remove two or more dashes
			input.article_uri = input.article_uri.replace(/\-{2,}/g, '-');

			// remove first and last dash
			input.article_uri = input.article_uri.replace(/^\-{1}|\-{1}$/g, '');
		}

		return input;
	});

	filter('items.update', (input) => {
		// check the fields
		const title = 'article_title' in input;
		
		if(title) {
			// cyrrilic to latin
			const title_latin = transliterate(input.article_title);

			// convert title to slug
			input.article_uri = title_latin.toLowerCase().replace(/\W{1}/g, '-');

			// remove two or more dashes
			input.article_uri = input.article_uri.replace(/\-{2,}/g, '-');

			// remove first and last dash
			input.article_uri = input.article_uri.replace(/^\-{1}|\-{1}$/g, '');
		}

		return input;
	});

};
