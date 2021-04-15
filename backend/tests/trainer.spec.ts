import { expect } from 'chai';
import TrainerController from "../src/controllers/TrainerController";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';
import {instance, mock, verify, when} from "ts-mockito";
import { TrainerRepository } from '../src/repositorties/TrainerRepository';

describe('Trainer', () => {
  describe('repository', () => {
    it('test true', () => {
        
      expect(true).to.equal(true)
    });
  });

  describe('controller', () => {
    let mockRepo : TrainerRepository;
    let controller : TrainerController;
    beforeEach(() => {
      mockRepo = instance(mock(TrainerRepository));
      controller = new TrainerController(mockRepo);
    });
  
    it('test true', () => {
        
      expect(true).to.equal(true)
    });
  });
  

  
});


