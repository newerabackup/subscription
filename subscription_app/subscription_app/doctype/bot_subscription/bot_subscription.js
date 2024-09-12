// Copyright (c) 2024, khayam khan and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bot Subscription', {
	refresh(frm) {
		calculate_total_days(frm);
	},

	start_date: function(frm) {
		calculate_total_days(frm);
	},

	end_date: function(frm) {
		calculate_total_days(frm);
	},

	days_number: function(frm) {
		calculate_end_date(frm);
	}
});

function calculate_total_days(frm) {
	if (frm.doc.start_date && frm.doc.end_date) {

		var start_date = moment(frm.doc.start_date);
		var end_date = moment(frm.doc.end_date);

		var total_days = end_date.diff(start_date, 'days');

		frm.set_value('total_days', total_days);
	} else {
		frm.set_value('total_days', null);
	}
}

function calculate_end_date(frm) {
	if (frm.doc.start_date && frm.doc.days_number) {
		var start_date = moment(frm.doc.start_date);
		var days_number = frm.doc.days_number;

		// Add the number of days to the start date
		var new_end_date = start_date.add(days_number, 'days').format('YYYY-MM-DD');

		frm.set_value('end_date', new_end_date);
	}
}

