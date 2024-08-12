import { describe, it, expect } from 'vitest';
import DNI from '../js/Dni.js';

describe('DNI', () => {
    it('Should return "T" when the number is 0', () => {
        const dni = new DNI(0);
        expect(dni.calculateLetter()).toBe('T');
    });

    it('Should return "R" when the number is 1', () => {
        const dni = new DNI(1);
        expect(dni.calculateLetter()).toBe('R');
    });

    it('Should return "P" when the number is 32000000', () => {
        const dni = new DNI(32000000);
        expect(dni.calculateLetter()).toBe('P');  // Actualiza según el resultado real
    });

    it('Should throw an error when the number is greater than 99999999', () => {
        const dni = new DNI(100000000);
        expect(() => dni.calculateLetter()).toThrow('The input data is incorrect');
    });

    it('Should throw an error when the number is negative', () => {
        const dni = new DNI(-5);
        expect(() => dni.calculateLetter()).toThrow('The input data is incorrect');
    });

    it('Should throw an error when the input is not a number', () => {
        const dni = new DNI('abcd');
        expect(() => dni.calculateLetter()).toThrow('The input data is incorrect');
    });
});