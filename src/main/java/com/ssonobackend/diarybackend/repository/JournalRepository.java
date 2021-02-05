package com.ssonobackend.diarybackend.repository;

import com.ssonobackend.diarybackend.domain.Journal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.stream.Stream;


@Repository
public interface JournalRepository extends JpaRepository<Journal, String> {
    Stream<Journal> findByEmotion(String emotion);
    Journal findByDate(String date);
}