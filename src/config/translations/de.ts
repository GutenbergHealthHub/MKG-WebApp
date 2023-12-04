export default {
  authenticate: {
    alternatively: '– oder alternativ –',
    continue: 'Fortfahren',
    error: {
      code_0:
        'Es konnte leider keine Netzwerkverbindung aufgebaut werden. Bitte versuchen Sie es später erneut.',
      code_401:
        'Der eingegebene Teilnahmecode konnte leider nicht erkannt werden. Bitte überprüfen Sie Ihre Eingabe.',
      qr_format:
        'Das Format des gescannten QR-Codes ist leider ungültig. Bitte scannen Sie einen gültigen Code ein.',
      qr_wrong_app:
        'Der gescannte QR-Code ist zur Nutzung mit einer anderen App als dieser gedacht. Bitte prüfen Sie die eingegebene Internetadresse und rufen Sie die richtige App auf.',
    },
    headline: 'Anmelden',
    infotext:
      'Geben Sie im Textfeld Ihren Teilnahmecode ein, um fortzufahren. Wenn Sie einen QR-Code erhalten haben und Ihr Endgerät über eine Kamera verfügt, können Sie diesen stattdessen einfach einscannen.',
    input_label: 'Ihr Teilnahmecode',
    stay_logged_in: {
      checkbox: 'Angemeldet bleiben',
      infotext: 'Wählen Sie diese Option nicht aus, wenn Sie ein öffentliches Gerät benutzen.',
    },
  },
  dashboard: {
    button: {
      logout: 'Abmelden',
      questionnaire: 'Fragebogen ausfüllen',
      report: 'Symptome melden',
    },
    headline: {
      new_user: 'Willkommen!',
      returning_user: 'Willkommen zurück!',
    },
    infotext: {
      questionnaire_available: {
        first_text:
          'Dieser Text wird angezeigt, falls es einen verfügbaren Fragebogen gibt, der noch nicht beantwortet wurde. Der Fragebogen muss ausgefüllt werden bis zum',
        second_text:
          'Dieser weitere Text wird angezeigt, falls es einen verfügbaren Fragebogen gibt, der noch nicht beantwortet wurde.',
      },
      questionnaire_not_available: {
        first_text:
          'Dieser Text wird angezeigt, wenn derzeit kein Fragebogen zum Ausfüllen zur Verfügung steht. Der nächste Fragebogen kann ausgefüllt werden ab dem',
        second_text:
          'Dieser weitere Text wird angezeigt, wenn derzeit kein Fragebogen zum Ausfüllen zur Verfügung steht. Wenn Sie Symptome haben, können Sie dies jederzeit melden.',
      },
    },
  },
  navigation: {
    contact: 'Kontakt',
    copyright_note: '© {{ year }} Unimedizin Mainz',
    dashboard: 'Übersicht',
    faq: 'FAQ',
    imprint: 'Impressum',
    logo: 'NUM compass web app',
    logout: 'Abmelden',
    privacy_policy: 'Datenschutzerklärung',
    session_expired: 'Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an, um fortzufahren.',
    terms_of_use: 'Nutzungsbedingungen',
    title: 'Menü',
  },
  notification_bar: {
    dismiss_button: 'Schließen',
  },
  questionnaire: {
    back: 'Zurück',
    confirm_submit: {
      error:
        'Beim Senden Ihrer Antworten ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut. Sie können Ihren Browser schließen und später fortfahren, ohne Ihre Antworten zu verlieren.',
      headline: 'Fragebogen absenden',
      infotext: 'Sie haben alle Fragen beantwortet. Indem Sie fortfahren, werden Ihre Angaben übermittelt.',
    },
    continue: 'Fortfahren',
    date_input: {
      error: 'Bitte überprüfen Sie das Eingabefeld.',
      day: 'Tag',
      month: 'Monat',
      open_date_picker: 'Kalender öffnen',
      year: 'Jahr',
    },
    dropdown_no_results: 'Keine Ergebnisse',
    fetch_failed:
      'Der Fragebogen konnte leider nicht abgerufen werden. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut.',
    fetch_retry: 'Erneut versuchen',
    finish: 'Zur Übersicht zurückkehren',
    group: 'Gruppe {{ number }}',
    infotext: 'Dieser Text wird angezeigt, wenn der Fragebogen keine Angaben zum Zweck enthält.',
    question: 'Frage {{ number }}',
    question_type_unsupported: 'Fragen vom Typ "{{ type }}" werden derzeit leider nicht unterstützt!',
    maxAnswersReached:
      'Maximale Anzahl Antworten erreicht. Andere Antwort abwählen, um diese Antwort auszuwählen.',
    success: {
      headline: 'Vielen Dank!',
      infotext: 'Vielen Dank für Ihren Beitrag!',
    },
  },
  report: {
    confirm_submit: {
      back: 'Zurück',
      continue: 'Absenden',
      error: 'Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
      headline: 'Symptome melden',
      infotext:
        'Falls Sie Symptome haben, können Sie dies melden. Klicken Sie auf die nachfolgende Schaltfläche, um die Information zu übermitteln.',
    },
    success: {
      finish: 'Zur Übersicht zurückkehren',
      headline: 'Symptome melden',
      infotext:
        'Sie haben erfolgreich gemeldet, dass Sie Symptome haben. Es wird Ihnen zeitnah ein weiterer Fragebogen zur Verfügung gestellt.',
    },
  },
  welcome: {
    continue: 'Weiter',
    headline: 'Willkommen',
    infotext: 'Hier steht ein kurzer und informativer Einführungstext zur App.',
  },
  imprint: {
    headline: 'Impressum',
    content: `<b>Anschrift und Kontakt</b>
    <br>
    Universitätsmedizin der Johannes Gutenberg-Universität Mainz
    <br>
    Langenbeckstraße 1
    <br>
    55131 Mainz
    <br>
    Tel. <a href="tel:+49 (0) 6131 17-0">+49 (0) 6131 17-0</a>
    <br>
    E-mail: <a href="mailto:webmaster@unimedizin-mainz.de">webmaster@unimedizin-mainz.de</a>
    <br><br>
    <b>Rechtsform</b>
    <br>
    Die Universitätsmedizin der Johannes Gutenberg-Universität Mainz ist eine Körperschaft des öffentlichen Rechts.
    <br><br>
    <b>Mitglieder des Vorstandes der Universitätsmedizin Mainz</b>
    <br>
    Vorstandsvorsitzender und Medizinischer Vorstand (vertretungsberechtigt)
    Univ.-Prof. Dr. Norbert Pfeiffer
    Weiterführende Informationen: www.unimedizin-mainz.de/ueber-uns/vorstand
    <br><br>
    <b>Umsatzsteuer-Identifikationsnummer</b>
    <br>
    DE149065652
    <br><br>
    <b>Vorsitzender des Aufsichtsrates</b>
    <br>
    Staatssekretär Dr. Denis Alt
    <br>
    Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz
    <br>
    Mittlere Bleiche 61
    <br>
    55116 Mainz
    <br><br>
    <b>Aufsichtsbehörde</b>
    <br>
    Die Universitätsmedizin steht unter der Rechtsaufsicht des für das Hochschulwesen zuständigen Ministeriums, die nach den hierfür geltenden hochschulrechtlichen Regelungen ausgeübt wird.
    Zuständige Aufsichtsbehörde für die Universitätsmedizin ist:
    <br>
    Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz
    <br>
    Mittlere Bleiche 61
    <br>
    55116 Mainz
    `,
  },
  terms: {
    headline: 'Nutzungsbedingungen',
    content:
      'Fügen Sie auf dieser Seite Ihre Nutzungsbedingungen ein. Sie können <strong>HTML</strong> verwenden.',
  },
  privacy_policy: {
    headline: 'Datenschutzerklärung',
    content:
      'Fügen Sie auf dieser Seite Ihre Datenschutzerklärung ein. Sie können <strong>HTML</strong> verwenden.',
  },
};
