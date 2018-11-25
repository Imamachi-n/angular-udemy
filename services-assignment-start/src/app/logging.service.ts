export class LoggingService {

  activeCounter = 0;
  inactiveCounter = 0;

  incrementActiveToInactive () {
    this.inactiveCounter++;
    console.log('Inactive Users: ', this.inactiveCounter);
  }

  incrementInactiveToActive () {
    this.activeCounter++;
    console.log('Active Users: ', this.activeCounter);
  }
}
