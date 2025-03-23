import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

    ngAfterViewInit() {
      this.renderSalesChart();
      this.renderOrdersChart();
    }
  
    renderSalesChart() {
      const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
              label: 'Revenue',
              data: [5000, 8000, 12000, 18000, 22000],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              fill: true
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  
    renderOrdersChart() {
      const ctx = document.getElementById('ordersChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Completed', 'Pending', 'Cancelled'],
            datasets: [{
              label: 'Orders',
              data: [120, 40, 10],
              backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true
          }
        });
      }
    }
  }
