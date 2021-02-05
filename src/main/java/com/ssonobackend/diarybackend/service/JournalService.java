package com.ssonobackend.diarybackend.service;

import com.ssonobackend.diarybackend.domain.Journal;
import com.ssonobackend.diarybackend.repository.JournalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface JournalService {
    List<Journal> findAll();
    List<Journal> findByEmotion();
    Journal findByDate(String date);
}
