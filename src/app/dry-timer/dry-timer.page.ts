import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dry-timer',
  templateUrl: './dry-timer.page.html',
  styleUrls: ['./dry-timer.page.scss'],
})
export class DryTimerPage {
  displayTime: string = '15:00'; // Initial timer value (15 minutes)
  timer: any;
  isTimerRunning: boolean = false;

  constructor(private router: Router, private alertController: AlertController) {}

  goToHomePage() {
    this.router.navigateByUrl('/home');
  }

  async startTimer() {
    const alert = await this.alertController.create({
      header: 'Confirm Start Timer',
      message: 'Are you sure you want to start the timer?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Start',
          handler: () => {
            this.isTimerRunning = true;
            let totalSeconds = 900; // 15 minutes (15 * 60 seconds)
            this.timer = setInterval(() => {
              if (totalSeconds === 0) {
                this.stopTimer();
              } else {
                totalSeconds--;
                this.displayTime = this.formatTime(totalSeconds);
                this.updateCircleTimer(totalSeconds, 900); // Update circular timer (15 minutes)
              }
            }, 1000);

            // Show success message with custom styles
            this.presentSuccessMessage('Timer started successfully!', 'custom-alert');
          }
        }
      ],
      cssClass: 'custom-alert' // Apply custom CSS class to alert
    });

    await alert.present();
  }

  async stopTimer() {
    const alert = await this.alertController.create({
      header: 'Confirm Stop Timer',
      message: 'Are you sure you want to stop the timer?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Stop',
          handler: () => {
            this.isTimerRunning = false;
            clearInterval(this.timer);
            this.displayTime = '15:00'; // Reset timer to 15 minutes
            this.updateCircleTimer(0, 900); // Reset circular timer (15 minutes)

            // Show success message with custom styles
            this.presentSuccessMessage('Timer stopped successfully!', 'custom-alert');
          }
        }
      ],
      cssClass: 'custom-alert' // Apply custom CSS class to alert
    });

    await alert.present();
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  updateCircleTimer(timeLeft: number, timerDuration: number) {
    const timerCircle = document.querySelector('.timer-circle') as SVGCircleElement;
    const circumference = 2 * Math.PI * 90; // Circumference of the circle (2 * π * r)
    const progress = timeLeft / timerDuration;
    const dashoffset = circumference * (1 - progress);
    timerCircle.style.strokeDashoffset = dashoffset.toString();

    const timerText = document.querySelector('.timer-text') as SVGTextElement;
    timerText.textContent = this.displayTime;
  }

  async presentSuccessMessage(message: string, cssClass: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK'],
      cssClass: cssClass // Apply custom CSS class to alert
    });

    await alert.present();
  }
}
