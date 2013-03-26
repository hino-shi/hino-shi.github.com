/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'hino_budget_2012';
OpenSpending.year = '2012';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* hino cofog */
  '20130100': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130101': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130200': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130201': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130202': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130203': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130204': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130205': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130206': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130300': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130301': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130400': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130401': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130402': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130403': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130404': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130405': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130406': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130407': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130408': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130500': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130501': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130502': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130503': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130504': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130505': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20130600': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#EC2406' },
  '20130601': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#EC2406' },
  '20130602': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#EC2406' },
  '20130700': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130701': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130702': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130703': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130704': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130705': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130706': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130707': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#938626' },
  '20130800': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#C75746' },
  '20130801': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#C75746' },
  '20130802': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#C75746' },
  '20130900': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#D33673' },
  '20130901': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#D33673' },
  '20131000': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#790586' },
  '20131001': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#790586' },
  '20131100': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#790586' },
  '20131101': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#790586' },
  '20131200': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#790586' },
  '20131201': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#790586' },
  '20131300': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '20131301': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  '20131400': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#790586' },
  '20131401': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },
  '20131402': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },
  '20131403': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },
  '20131404': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  '20131405': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '20131406': { icon: 'icons/culture.svg', color: '#C75746', bcolor: '#790586' },
  '20131500': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  '20131501': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  '20131600': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#790586' },
  '20131601': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#790586' },
  '20131700': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '20131701': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' }
};