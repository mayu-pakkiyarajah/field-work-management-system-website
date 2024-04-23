import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerRequestComponent } from './worker-request.component';

describe('WorkerRequestComponent', () => {
  let component: WorkerRequestComponent;
  let fixture: ComponentFixture<WorkerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
