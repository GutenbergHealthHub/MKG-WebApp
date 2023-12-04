import { Component, h } from '@stencil/core';
import stores from 'stores';
import { ROUTES } from 'config';
import { Card } from 'components/card/card';

@Component({
  tag: 'num-container-welcome',
})
export class Welcome {
  render() {
    return (
      <Card headline={stores.i18n.t('welcome.headline')}>
        <p class="u-infotext block">
          Sehr geehrte Patientinnen und Patienten,
          <br /> Bei Ihnen ist der Ersatz eines oder beider Kiefergelenke durch eine Totalendoprothese
          vorgesehen. Ihr individuelles Wohlbefinden steht im Mittelpunkt unseres Interesses, denn wir sind
          bestrebt, Ihre medizinische Versorgung und Betreuung kontinuierlich zu verbessern. Diese Befragung
          dient dazu, ein tieferes Verständnis für Ihre persönliche Wahrnehmung und Bewertung der
          Lebensqualität zu gewinnen. Die Bedeutung des subjektiven Wohlbefindens im Gesundheitswesen ist von
          zentraler Bedeutung. Nicht nur medizinische Faktoren, sondern auch psychologische, soziale und
          emotionale Aspekte spielen eine Rolle für Ihre Gesundheit und Lebensqualität. Daher ist es uns ein
          Anliegen, Ihre persönlichen Einschätzungen zu verstehen und in unsere Behandlungsansätze
          einzubeziehen. Ihre Teilnahme an dieser Befragung ist freiwillig und Ihre Antworten werden
          vertraulich behandelt. Die gesammelten Daten werden anonymisiert ausgewertet, sodass keine
          Rückschlüsse auf Ihre Identität gezogen werden können. Bitte nehmen Sie sich etwas Zeit, um die
          nachfolgenden Fragen sorgfältig zu beantworten. Ihre ehrlichen Rückmeldungen tragen dazu bei, ein
          umfassendes Bild über Ihr Wohlbefinden zu erhalten. Wir danken Ihnen herzlich im Voraus für Ihre
          Teilnahme und Ihr wertvolles Feedback.
        </p>

        <ul class="u-list-reset">
          <li class="u-margin-top--normal">
            <stencil-route-link url={ROUTES.TERMS}>
              <d4l-button
                classes="button--tertiary button--block"
                text={stores.i18n.t('navigation.terms_of_use')}
                isRouteLink
              />
            </stencil-route-link>
          </li>
          <li class="u-margin-top--small u-margin-bottom--medium">
            <stencil-route-link url={ROUTES.PRIVACY_POLICY}>
              <d4l-button
                classes="button--tertiary button--block"
                text={stores.i18n.t('navigation.privacy_policy')}
                isRouteLink
              />
            </stencil-route-link>
          </li>
        </ul>

        <stencil-route-link url={ROUTES.AUTHENTICATE}>
          <d4l-button classes="button--block" text={stores.i18n.t('welcome.continue')} isRouteLink />
        </stencil-route-link>
      </Card>
    );
  }
}
