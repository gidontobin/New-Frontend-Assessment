import { test, expect } from '@playwright/test';

test('test clickeble items', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.locator('div').filter({ hasText: /^Task Manager$/ }).click();
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Projects' }).click();
  await page.getByRole('button', { name: 'Team' }).click();
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByText('TasksShowing 8 tasks').click();
  await page.getByText('TaskStatusPriorityDue').click();
  await page.getByText('Task', { exact: true }).click();
  await page.getByText('Status').click();
  await page.getByText('Priority').click();
  await page.getByText('Due Date').click();
  await page.getByText('Implement user authentication').click();
  await page.getByText('securityfrontend+').click();
  await page.locator('div').filter({ hasText: /^In Progress$/ }).first().click();
  await page.getByText('Implement user authenticationsecurityfrontend+1In ProgressHighMay 20, 2025Alex').click();
  await page.locator('div').filter({ hasText: /^Done$/ }).click();
  await page.getByText('designfrontend', { exact: true }).click();
  await page.getByText('Design homepage layout').click();
  await page.getByText('Optimize database queriesbackendperformanceTo DoHighMay 22, 2025David').click();
  await page.locator('div').filter({ hasText: /^To Do$/ }).first().click();
  await page.locator('div').filter({ hasText: /^High$/ }).nth(1).click();
  await page.getByText('Write API documentation').click();
  await page.getByText('Implement dark modedesignfrontend+1In ProgressLowMay 25, 2025Sophia').click();
  await page.getByText('Fix checkout payment issues').click();
  await page.getByText('Implement analytics dashboard').click();
  await page.locator('div').filter({ hasText: /^To Do$/ }).nth(2).click();
  await page.getByText('Assignee').click();
  await page.getByRole('button', { name: 'Create Task' }).click();
  await page.getByText('Conduct user testing for new featuresuser-researchtestingTo DoMediumMay 28,').click();
  await page.getByText('Conduct user testing for new featuresuser-researchtestingTo DoMediumMay 28,').click();
  await page.getByText('Implement analytics dashboard').click();
  await page.getByText('backendperformance').click();
  await page.getByText('Design homepage layoutdesignfrontendDoneMediumMay 8, 2025Sophia').click();
  await page.getByText('Implement analytics dashboardfrontenddata+1To DoMediumMay 30, 2025David').click();
  await page.getByText('Fix checkout payment issuesbugfrontend+').click();
  
  
});

test('check status bar colors for different priorities', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  
  // Check Medium priority - looking for the badge element inside the col-span-2 div
  const mediumStatus = page.locator('div.col-span-2')
    .filter({ hasText: /^Medium$/ })
    .locator('span')  // or 'div' depending on your component structure
    .first();
  await expect(mediumStatus).toHaveClass(/bg-yellow-100/);
  await expect(mediumStatus).toHaveClass(/text-yellow-800/);
  
  // Check High priority
  const highStatus = page.locator('div.col-span-2')
    .filter({ hasText: /^High$/ })
    .locator('span')
    .first();
  await expect(highStatus).toHaveClass(/bg-red-100/);
  await expect(highStatus).toHaveClass(/text-red-800/);
  
  // Check Low priority
  const lowStatus = page.locator('div.col-span-2')
    .filter({ hasText: /^Low$/ })
    .locator('span')
    .first();
  await expect(lowStatus).toHaveClass(/bg-gray-100/);
  await expect(lowStatus).toHaveClass(/text-gray-800/);
});